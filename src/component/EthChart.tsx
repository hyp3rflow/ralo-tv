import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

interface candleType {
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  candle_date_time_kst: string;
  candle_date_time_utc: string;
  high_price: number;
  low_price: number;
  market: string;
  opening_price: number;
  timestamp: number;
  trade_price: number;
  unit: number;
}

const EthChart = () => {
  const [chartData, setChartData] = useState<candleType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://api.upbit.com/v1/candles/minutes/1?market=KRW-ETH&count=100',
        {
          method: 'GET',
          headers: {},
        }
      );

      const jsonData = await data.json();
      setChartData(jsonData);
      console.log(jsonData);
    };

    fetchData();
  }, []);

  const option = {
    chart: {
      type: 'candlestick',
      fontFamily: 'KoPub Dotum',
      height: 350,
    },
    title: {
      text: '이더리움 차트 (업비트)',
      align: 'left',
    },
    tooltip: {
      enabled: true,
      style: {
        color: 'black',
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
      },
    },
    style: {
      background: '#ffffff',
      color: '#777',
      fontSize: '12px',
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  if (chartData.length) {
    const data = chartData.map(candle => {
      const {
        opening_price,
        trade_price,
        high_price,
        low_price,
        candle_date_time_kst,
        timestamp,
      } = candle;

      return {
        x: new Date(candle_date_time_kst),
        y: [opening_price, high_price, low_price, trade_price],
      };
    });

    const series = [{ data }];

    return (
      <>
        <Chart
          options={option}
          series={series}
          type="candlestick"
          height={400}
        />
      </>
    );
  } else return <></>;
};

export default EthChart;

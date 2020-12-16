import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  width: 100%;
`;

const StyledButton = styled.button`
  padding: 15px;

  min-width: 80px;

  background: rgba(0, 0, 0, 0.4);
  font-size: 1.125rem;
  margin: 10px;

  img {
    display: inline-block;
    max-width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
`;

interface buttonElementType {
  name: string;
  imgSrc: string;
  link: string;
}

interface quickButtonPropType {
  buttonObject: buttonElementType;
}

const ButtonObjectArray = [
  {
    name: '트위치',
    imgSrc: './logo/TwitchGlitchPurple.svg',
    link: 'https://twitch.tv/aba4647',
  },
  {
    name: '유튜브',
    imgSrc: './logo/YoutubeCircle.png',
    link: 'https://www.youtube.com/channel/UCD2YO_A_PVMgMDN9jpRrpVA',
  },
  {
    name: '트게더',
    imgSrc: './logo/tgd-logo.png',
    link: 'https://tgd.kr/s/aba4647',
  },
  {
    name: '업비트',
    imgSrc: './logo/eth-diamond-purple.png',
    link: 'https://upbit.com/',
  },
];

const QuickContainer = () => {
  return (
    <ButtonContainer>
      {ButtonObjectArray.map(element => (
        <QuickButton key={element.name} buttonObject={element} />
      ))}
    </ButtonContainer>
  );
};

const QuickButton = ({ buttonObject }: quickButtonPropType) => {
  const { name, imgSrc, link } = buttonObject;

  return (
    <a href={link}>
      <StyledButton>
        <img src={imgSrc} alt={name + ' 로고'} />
        <div>{name}</div>
      </StyledButton>
    </a>
  );
};

export default QuickContainer;

import React from 'react';
import YouTube, { Options } from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;

  iframe {
    display: block;
    margin: 0 auto;
  }
`;

const Ralcuranbo = () => {
  const option: Options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'iSw5EJUI4Fw',
    },
  };

  return (
    <Container>
      <YouTube videoId="iSw5EJUI4Fw" opts={option} />
    </Container>
  );
};

export default Ralcuranbo;

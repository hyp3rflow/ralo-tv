import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <div>hyperflow (백수, 14팟번)</div>
      <a href="https://github.com/hyp3rflow/ralo-tv">github repo</a>
    </Container>
  );
};

export default Footer;

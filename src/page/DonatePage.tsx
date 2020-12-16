import React from 'react';
import styled from 'styled-components';

const DonateContainer = styled.div`
  margin-top: 15px;
`;

const DonateSection = styled.section`
  padding: 15px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DonatePage = () => {
  return (
    <DonateContainer>
      <DonateSection>
        <h1>마루쉐가 비트코인을 살 수 있도록 도와주세요.</h1>
        <br />
        <a href="https://toon.at/aba4647">
          <img src="./donate/toonation.png" alt="투네이션 후원" />
        </a>
      </DonateSection>
    </DonateContainer>
  );
};

export default DonatePage;

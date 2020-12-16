import React from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div``;

const SectionContainer = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  padding: 10px;
`;

const SectionImg = styled.img`
  width: 400px;
  margin-right: 10px;
`;

const IntroPage = () => {
  return (
    <CenterContainer>
      <SectionContainer>
        <SectionImg src="./thumbnail/season2.png" alt="시즌2 롤귀신" />
        <article>
          <h1>김해의 아들 김찬호</h1>
          시즌2 2400, 코인의 귀재
        </article>
      </SectionContainer>
    </CenterContainer>
  );
};

export default IntroPage;

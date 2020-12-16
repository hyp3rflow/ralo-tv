import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import IntroPage from './page/IntroPage';
import FrontPage from './page/FrontPage';
import DonatePage from './page/DonatePage';

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  background-color: rgba(40, 44, 52, 0.8);

  padding: 20px;

  width: 100%;
  max-width: 1000px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100vh;

  background: url('./ralo_room.png');
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(3px);
`;

const App = () => {
  return (
    <Router>
      <Background />
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/intro">
            <IntroPage />
          </Route>
          <Route path="/donate">
            <DonatePage />
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;

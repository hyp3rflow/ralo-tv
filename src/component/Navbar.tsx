import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const NavContainer = styled.nav`
  height: 50px;
  margin: 0 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLogoContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;

  li {
    display: inline;
    font-size: 1.125rem;
    padding: 10px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;

  animation: ${rotate} 5s linear infinite;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogoContainer to="/">
        <LogoImg src={'./ralo.jpeg'} className="App-logo" alt="logo" />
        <h1>랄로티비</h1>
      </NavLogoContainer>
      <NavList>
        <li>
          <Link to="/intro">소개</Link>
        </li>
        <li>
          <Link to="/gallery">갤러리</Link>
        </li>
        <li>
          <Link to="/donate">후원</Link>
        </li>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;

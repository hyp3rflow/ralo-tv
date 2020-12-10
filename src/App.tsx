import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ width: '200px', height: '200px' }}
          src={'./ralo.jpeg'}
          className="App-logo"
          alt="logo"
        />
        <br />
        <p>Ralo.tv</p>
        <a
          className="App-link"
          href="https://twitch.tv/aba4647"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Ralo
        </a>
      </header>
    </div>
  );
}

export default App;

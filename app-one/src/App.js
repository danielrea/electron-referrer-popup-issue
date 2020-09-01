import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const windowFeatures = 'toolbar=0,location=0,menubar=0,scrollbars=yes,status=yes,width=450,height=700'
  window.open('http://localhost:3004', '_blank', windowFeatures)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

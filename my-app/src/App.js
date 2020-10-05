import React from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import Home from './components/home-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        </header>
    </div>
  );
}

export default App;

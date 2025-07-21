import React from 'react';
import{ useState, useEffect } from 'react';
import './App.css';

function App() {
  return (

  <header className="header">
    <nav className="header-nav">
      <div className="header-nav-top">
        <img src="./img/Pokeball.svg" alt="" className="header-logo" />
        <h1>Pokédex</h1>
      </div>
      <div className="header-input-container">
        <img src="./img/Search.svg" alt="" className="header-input-icon" />
        <input className="header-input" type="search" placeholder="Search" />
      </div>
      <img src="./img/Vector.svg" alt="" className="header-filter" />
    </nav>
  </header>
  );
}

export default App;

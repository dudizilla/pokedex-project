import React from 'react';
import{ useState, useEffect } from 'react';
import './App.css';

function App() {
  return (

    <header className="header">
      <div className="header-top">
        <img alt="" className="header-logo" src="./img/Pokeball.svg" />
        <h1>Pokédex</h1>
      </div>
      <div className="header-search-wrapper">
        <div className="header-input-container">
          <img alt="" className="header-input-icon" src="./img/Search.svg" />
          <input className="header-input" id="search" placeholder="Search" type="search" />
        </div>
      </div>
   </header>
  );
}

export default App;

import React from 'react';
import{ useState, useEffect } from 'react';
import './App.css';

function App() {
  return (

    <header className="header">

      <img src="src/img/Pokeball.png" alt="" className="header-logo" />
      <h1>Pokédex</h1>
      <input className="header-input" type="search" placeholder="Search" />
        
    </header>
  );
}

export default App;

import React from 'react';
import{ useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search.js';


function App() {
  const [search, setSearch] = useState('');

  return (

    <header className="header">
      <div className="header-top">
        <img alt="" className="header-logo" src="./img/Pokeball.svg" />
        <h1>Pokédex</h1>
      </div>
      <div className="header-search-wrapper">
      <Search value={search} onChange={(e) => setSearch(e.target.value)} /> 
      </div>
   </header>
  );
}

export default App;

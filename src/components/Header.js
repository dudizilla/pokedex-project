import React from 'react';
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <img alt="Pokeball logo" className="header-logo" src="./img/Pokeball.svg" />
        <h1 className="header-title">Pokédex</h1>
      </div>
      <div className="header-search-wrapper">
      </div>
    </header>
  );
}

export default Header;

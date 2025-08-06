import React from 'react';      
import PropTypes from 'prop-types';
import './Search.css';

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

function Search({ value, onChange }) {
    return (
      <div className="header-input-container">
        <label className="sr-only" htmlFor="search" >Search Pokémon</label>
        <img alt="Search icon" className="header-input-icon" src="./img/Search.svg"/>
        <input className="header-input" id="search" placeholder="Search" type="search" value={value} onChange={onChange}/>

      {value && (
        <button type="button" className="clear-button" onClick={() => onChange({ target: { value: '' } })}>
          <img src="./img/Close.svg" alt="Clear input" className="clear-icon"/>
        </button>
      )}
      </div>
    );
  }
export default Search;
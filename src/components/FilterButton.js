import React, { useState, useRef, useEffect } from 'react';


function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('name');
  const popupRef = useRef();

  const togglePopup = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-button-wrapper" ref={popupRef}>
      <button className="filter-button" onClick={togglePopup}>
        <img src="./img/Vector.svg" alt="Filter" />
      </button>
      {isOpen && (
    <div className="filter-popup">
    <p className="filter-label">Sort by:</p>
    <label className="filter-option">
      <input
        type="radio"
        name="sort"
        value="name"
        checked={selected === 'name'}
        onChange={() => handleSelect('name')}
      />
      Name
    </label>
    <label className="filter-option">
      <input
        type="radio"
        name="sort"
        value="number"
        checked={selected === 'number'}
        onChange={() => handleSelect('number')}
      />
      Number
    </label>
  </div>
      )}
    </div>
  );
}

export default FilterButton;
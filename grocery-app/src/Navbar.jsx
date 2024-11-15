// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Grocery World</div>

      <div className="category-dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
          Shop by Category
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <a href="#fruits" className="dropdown-item">Fruits</a>
            <a href="#vegetables" className="dropdown-item">Vegetables</a>
            <a href="#dairy" className="dropdown-item">Dairy</a>
            <a href="#trending" className="dropdown-item">Trending</a>
          </div>
        )}
      </div>

      <input type="text" placeholder="Search for Products..." className="search-bar" />
      <button className="location-button">Select Location</button>
    </nav>
  );
}

export default Navbar;

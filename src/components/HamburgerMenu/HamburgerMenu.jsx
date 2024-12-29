import React from 'react';
import './HamburgerMenu.scss';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {

  return (
    <div
      id="nav-icon2"
      className={isOpen ? 'open' : ''}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;

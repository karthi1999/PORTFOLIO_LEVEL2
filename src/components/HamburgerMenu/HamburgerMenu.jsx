import React, { useState } from 'react';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

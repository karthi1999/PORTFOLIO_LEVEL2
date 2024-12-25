import React, { useState } from 'react';
import "./Navbar.scss";
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu
  const [navList, setNavList] = useState([
    {
      id: 1,
      label: 'home',
      link: '#',
      isActive: true
    },
    {
      id: 2,
      label: 'about',
      link: '#',
      isActive: false
    },
    {
      id: 3,
      label: 'project',
      link: '#',
      isActive: false
    },
    {
      id: 4,
      label: 'contact',
      link: '#',
      isActive: false
    },
  ])

  const handleNavbar = (id) => {
    setNavList((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false }
      )
    );
  };


  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navbar-section'>
      <div className='desktop-menu'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-4/5">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="shrink-0">
                <p className='text-black font-bold text-lg'><span className='text-red-500'>K</span>ARTHI.</p>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navList && navList.map((item) => {
                    return(
                      <div key={item.id} className={`button v1 ${item.isActive ? '' : 'transparent'}`} onClick={() => handleNavbar(item.id)}>
                        <a className="label" href={item.link}>{item.label}</a>
                        <span className="icon">
                          <span></span>
                        </span>
                        <span className="icon2">
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          
            {/* Button to Open/Close Mobile Menu */}
            <div className="-mr-2 flex sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center focus:outline-none focus:ring-0"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span> 
                <HamburgerMenu />
              </button>
            </div> 

          </div>
        </div>
      </div>

      {/* Mobile Menu (Initially hidden, slides in/out) */}
      <div
        id="mobile-menu"
        className={`sm:hidden h-screen left-0 top-0 w-full flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-2 pb-3 pt-2 flex flex-col gap-5">
          {navList && navList.map((item) => {
            return (
              <div
                key={item.id}
                className={`button v1 ${item.isActive ? '' : 'transparent'}`}
                onClick={() => handleNavbar(item.id)}
              >
                <a className="label" href={item.link}>{item.label}</a>
                <span className="icon">
                  <span></span>
                </span>
                <span className="icon2"></span>
              </div>
            );
          })}
        </div>
        <div className="button v1 mb-36">
          <span className="label">Download</span>
          <span className="icon">
            <span></span>
          </span>
          <span className="icon2"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
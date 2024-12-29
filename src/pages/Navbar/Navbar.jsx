import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navList, setNavList] = useState([
    { id: 1, label: 'home', link: '#home', isActive: true },
    { id: 2, label: 'about', link: '#about', isActive: false },
    { id: 3, label: 'projects', link: '#projects', isActive: false },
    { id: 4, label: 'contact', link: '#contact', isActive: false },
  ]);

  const sectionPositions = useRef([]);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavbar = (id) => {
    setNavList((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
    toggleMenu();
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const currentSection = sectionPositions.current
      .slice()
      .reverse()
      .find((section) => scrollPosition >= section.top);

    if (currentSection) {
      setNavList((prev) =>
        prev.map((item) =>
          item.id === currentSection.id
            ? { ...item, isActive: true }
            : { ...item, isActive: false }
        )
      );
    }
  };

  useEffect(() => {
    // Calculate section positions on mount
    sectionPositions.current = navList.map((item) => {
      const section = document.querySelector(item.link);
      return section
        ? { id: item.id, top: section.offsetTop }
        : null;
    }).filter(Boolean);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array

  return (
    <nav className="navbar-section md:fixed md:top-0 md:z-40">
      <div className="desktop-menu md:fixed md:top-0 md:z-40">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-4/5">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="shrink-0">
                <p className="text-black font-bold text-lg">
                  <span className="text-red-500">K</span>ARTHI.
                </p>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navList.map((item) => (
                    <div
                      key={item.id}
                      className={`button v1 ${item.isActive ? '' : 'transparent'
                        }`}
                      onClick={() => handleNavbar(item.id)}
                    >
                      <a className="label font-medium" href={item.link}>
                        {item.label}
                      </a>
                      <span className="icon">
                        <span></span>
                      </span>
                      <span className="icon2"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
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
                <HamburgerMenu
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`sm:hidden h-screen left-0 top-0 w-full flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="px-2 pb-3 pt-2 flex flex-col gap-5">
          {navList.map((item) => (
            <div
              key={item.id}
              className={`button v1 ${item.isActive ? '' : 'transparent'
                }`}
              onClick={() => handleNavbar(item.id)}
            >
              <a className="label font-semibold" href={item.link}>
                {item.label}
              </a>
              <span className="icon">
                <span></span>
              </span>
              <span className="icon2"></span>
            </div>
          ))}
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
  );
};

export default Navbar;

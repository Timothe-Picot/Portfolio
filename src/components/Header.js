import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check the scrolling direction
      setShowHeader(scrollY <= prevScrollY || scrollY < window.innerHeight);

      // Update the previous scroll position
      setPrevScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <nav>
        <ul>
          <li>
            <Link to="intro" smooth={true} duration={500}>
              Acceuil
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              A propos de moi
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projets
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500}>
              Me contacter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

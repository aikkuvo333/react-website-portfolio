import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { ContactButton } from './ContactButton';
import './NavBar.css';

function NavBar() {

  const [click, setClick] = useState(false);
  const openMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => { //to show button only once (fixing the error)
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const scrollToView = (id) => {
    const sectionById = document.getElementById(id);
    if (sectionById) {
      sectionById.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Cant scroll to " + id + "view")
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={() => { closeMobileMenu(); scrollToView('home_section'); }}>
            AIVAN VO
          </Link>
          <div className='menu-icon' onClick={openMobileMenu}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { closeMobileMenu(); scrollToView('home_section'); }}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links' onClick={() => { closeMobileMenu(); scrollToView('projects_section'); }}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links-mobile' onClick={() => { closeMobileMenu(); scrollToView('contact_section'); }}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <ContactButton buttonStyle='btn--outline' onClick={() => scrollToView('contact_section')}>Contact</ContactButton>}
        </div>
      </nav>
    </>
  );
}

export default NavBar

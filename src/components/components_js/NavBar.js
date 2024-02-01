import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { ContactBtn } from './ContactBtn';
import '../components_css/NavBar.css';

function NavBar() {

  const [click, setClick] = useState(false);
  const openMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [btn, setBtn] = useState(true);
  const showBtn = () => {
    if (window.innerWidth <= 960) {
      setBtn(false)
    } else {
      setBtn(true)
    }
  };

  useEffect(() => {
    showBtn();
  }, []);

  window.addEventListener('resize', showBtn);

  const scrollToView = (id) => {
    const sectionById = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    if (sectionById) {
      //Reduce the height of the navbar from the element, in order to not scroll too low
      window.scrollTo({
        top: sectionById.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
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
          {btn && <ContactBtn btnStyle='btn--outline' onClick={() => scrollToView('contact_section')}>Contact</ContactBtn>}
        </div>
      </nav>
    </>
  );
}

export default NavBar

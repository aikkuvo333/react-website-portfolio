import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {

  const [click, setClick] = useState(false);
  const openMobileMenu = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  const[button, setButton] = useState(true);
  const showButton = () => {  
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => { //to show button only once (fixing the error))
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
               AIVAN VO 
            </Link>
            <div className='menu-icon' onClick={openMobileMenu}>
              <FontAwesomeIcon icon={click ? faTimes : faBars} className={click ? 'fas fa-times' : 'fas fa-bars'}></FontAwesomeIcon>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
     </nav>
    </>
  );
}

export default NavBar

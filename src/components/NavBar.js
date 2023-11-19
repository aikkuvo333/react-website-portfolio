import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); //edit name of function

  const closeMobileMenu = () => setClick(false);

  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
               AIVAN VO 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <FontAwesomeIcon icon={click ? faTimes : faBars} className={click ? 'fas fa-times' : 'fas fa-bars'}></FontAwesomeIcon>
            </div>
            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
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
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
        </div>
     </nav>
    </>
  );
}

export default NavBar

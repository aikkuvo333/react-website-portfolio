import React from 'react'
import '../components_css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Cards() {
  return (
    <div className='footer'>
      <div className='contact-some-container'>
        <h2>Connect with me!</h2>
        <div className='horizontal-list'>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/aivan-vo/' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='some-icon'></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://www.github.com/aikkuvo333/' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className='some-icon'></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">Copyright © 2024 Aivan Vo. All Rights Reserved.</div>
      </div>
    </div>
  );
}
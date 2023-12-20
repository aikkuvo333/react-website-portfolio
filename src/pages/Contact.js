import React from 'react';
import '../App.js';
import ContactForm from '../components/ContactForm.js';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div id='contact_section'>
      <div>
        <h1>Contact</h1>
        <p>Want to work together on a project?</p>
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <h2>Connect elsewhere!</h2>
        <div>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/aivan-vo/' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://www.github.com/aikkuvo333/' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import '../App.js';
import ContactForm from '../components/ContactForm.js';
import './Contact.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
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
              <Link>aivan.vo@metropolia.fi</Link>
            </li>
            <li>
              <Link>LinkedIn</Link>
            </li>
            <li>
              <Link>Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
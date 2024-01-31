import React from 'react';
import '../App.js';
import ContactForm from '../components/ContactForm.js';
import './Contact.css';
import './Cards.css';

export default function Contact() {
  return (
    <div id='contact_section'>
      <div className='contact-text-container cards__projects'>
        <h1>Contact</h1>
        <div className='cards__separator'></div>
        <p>Want to work together on a project?</p>
      </div>
        <ContactForm/>
    </div>
  )
}
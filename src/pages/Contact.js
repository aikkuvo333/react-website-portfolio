import React from 'react';
import '../App.js';
import ContactForm from '../components/ContactForm.js';
import './Contact.css';


export default function Contact() {
  return (
    <div id='contact_section'>
      <div className='contact-text-container'>
        <h1>Contact</h1>
        <p>Want to work together on a project?</p>
      </div>
      <div className='contactform-container'>
        <ContactForm/>
      </div>
    </div>
  )
}
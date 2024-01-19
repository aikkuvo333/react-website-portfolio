import React from 'react';
import '../App.css';
import { ContactButton } from '../components/ContactButton';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>AIVAN VO</h1>
      <p>Hello! Welcome to my portfolio</p>
      <div className='main-btns'>
        <ContactButton className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          CONTACT ME
        </ContactButton>
      </div>
    </div>
  )
}

export default MainSection;
import React from 'react';
import '../App.css';
import { ContactBtn } from '../components/ContactBtn';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>AIVAN VO</h1>
      <p>Hello! Welcome to my portfolio</p>
      <div className='main-btns'>
        <ContactBtn className='btns' btnStyle='btn--outline' btnSize='btn--large'>
          CONTACT ME
        </ContactBtn>
      </div>
    </div>
  )
}

export default MainSection;
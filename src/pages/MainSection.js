import React from 'react';
import '../App.css';
import { ContactBtn } from '../components/ContactBtn';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>AIVAN VO</h1>
      <p>Hello! Welcome to my portfolio. 
        I am a final year student of Information and Communication Technology, specializing in software production. 

        I have particular expertise in  JavaScript, Java as well as creating automation testing.</p>
      <div className='main-btns'>
        <ContactBtn className='btns' btnStyle='btn--outline' btnSize='btn--large'>
          CONTACT ME
        </ContactBtn>
      </div>
    </div>
  )
}

export default MainSection;
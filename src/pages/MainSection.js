import React from 'react';
import '../App.css';
import { ContactBtn } from '../components/ContactBtn';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>AIVAN VO</h1>
      <p>Hello! Welcome to my portfolio. 
        I am a student of Information and Communication Technology, specializing in software production. 
        I am an enthusiastic, solution-oriented learner with experience in various industry projects. 
        I have particular expertise in creating automated tests, automation testing, as well as JavaScript, Java, and SQL.</p>
      <div className='main-btns'>
        <ContactBtn className='btns' btnStyle='btn--outline' btnSize='btn--large'>
          CONTACT ME
        </ContactBtn>
      </div>
    </div>
  )
}

export default MainSection;
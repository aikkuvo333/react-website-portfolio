import React from 'react';
import '../App.css';
import {Button} from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>AIVAN VO</h1>
      <p>Hello! Welcome to my portfolio</p>
      <div className='main-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
         CONTACT ME
        </Button>
      </div>
    </div>
  )
}

export default MainSection;
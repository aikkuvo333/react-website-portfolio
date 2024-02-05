import React from 'react';
import '../../App.css';
import { ContactBtn } from '../../components/components_js/ContactBtn';
import '../pages_css/MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>AIVeferfrewAN VO</h1>
      <p>Hello! Welcome to my portfolio. 
        I'm a final year student of Information and Communication Technology, 
        specializing in <b>Software Engineering</b>. 

        I have particular expertise in  JavaScript, 
        Java as well as creating automation testing.</p>
      <div className='main-btns'>
        <ContactBtn className='btns' btnStyle='btn--outline' btnSize='btn--large'>
          CONTACT ME
        </ContactBtn>
      </div>
    </div>
  )
}

export default MainSection;
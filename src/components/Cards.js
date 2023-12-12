import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards' id='projects_section'>
    <h1>Projects</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem src='/images/image2.jpg' 
                text='Explore the hidden' 
                label='adventure' 
                path='/projects'></CardItem>
            <CardItem src='/images/image2.jpg' 
                text='Explore the hidden' 
                label='adventure' 
                path='/projects'></CardItem>
          </ul>
          <ul className='cards__items'>
          <CardItem src='/images/image2.jpg' 
                text='Explore the hidden' 
                label='adventure' 
                path='/projects'></CardItem>
            <CardItem
              src='images/image2.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
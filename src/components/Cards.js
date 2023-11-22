import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
    <h1>Latest projects</h1>
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
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
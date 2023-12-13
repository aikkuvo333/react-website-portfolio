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
                text='Ecolounge' 
                label='product design' 
                path='/projects'></CardItem>
            <CardItem src='/images/image2.jpg' 
                text='Chess game application' 
                label='java' 
                path='/projects'></CardItem>
          </ul>
          <ul className='cards__items'>
          <CardItem src='/images/image2.jpg' 
                text='Pharmacy capacity simulator' 
                label='java' 
                path='/projects'></CardItem>
            <CardItem
              src='images/image2.jpg'
              text='Website Behaviour Tracking'
              label='google analytics'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem src='/images/image2.jpg' 
                text='Track Calorie tracker' 
                label='vue' 
                path='/projects'></CardItem>
            <CardItem
              src='images/image2.jpg'
              text='Project'
              label=''
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
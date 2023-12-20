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
          <CardItem src='/images/ecolounge.jpg' 
                title='Ecolounge lounger' 
                label='product design'
                details='
                Project Scope: 
                Developing sun chair prototype using recycled ocean plastic waste for the marina of Valencia. University project made with 3 other international students in Valencia, Spain.
                
                Tasks:
                - Point of contact for client communication
                - Assisting role in designing and developing a sustainable sunchair prototype using recycled plastic waste sourced from the ocean.
                - Market research
                - Prototype production

                Outcome:
                The client has incorporated our prototype into their ongoing research and development initiatives, underscoring the projects significance and impact'
                link='https://www.instagram.com/ecolounge_vlc/'
                linkTitle='Instagram'
                skills='product degign'/>
            <CardItem src='/images/image2.jpg' 
                title='Chess game application' 
                label='java'
                details=''
                link=''
                linkTitle=''
                skills=''/>
          </ul>
          <ul className='cards__items'>
          <CardItem src='/images/image2.jpg' 
                title='Pharmacy capacity simulator' 
                label='java'
                details=''
                link=''
                linkTitle=''
                skills=''/>
            <CardItem
              src='images/image2.jpg'
              title='Website Behaviour Tracking'
              label='google analytics'
              details=''
                link=''
                linkTitle=''
                skills=''/>
          </ul>
          <ul className='cards__items'>
          <CardItem src='/images/image2.jpg' 
                title='Track Calorie tracker' 
                label='vue'
                details=''
                link=''
                linkTitle=''
                skills=''/>
            <CardItem
              src='images/image2.jpg'
              title='Project'
              label=''
              details=''
              link=''
              linkTitle=''
              skills=''/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
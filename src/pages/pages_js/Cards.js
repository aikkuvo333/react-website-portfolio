import React from 'react'
import CardItem from '../../components/components_js/CardItem';
import '../pages_css/Cards.css';

function Cards() {
  return (
    <div className='cards' id='projects_section'>
      <div className='cards__projects'>
        <h1>Projects</h1>
        <div className='cards__separator'></div>
        <p>Here you can find some of my personal as well as university projects</p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='/images/ecolounge.jpg'
              title='Ecolounge'
              description='Sun chair made out of recycled ocean plastic waste for the marina of Valencia.'
              label='product design'
              details='
              Ecolounge is an innovative project where we crafted a sun chair prototype using recycled ocean plastic waste for the marina of Valencia. 
              In collaboration with international peers, we took on roles as the client´s point of contact, contributed to sustainable design, conducted market research, and oversaw prototype production.'
              link='https://www.instagram.com/ecolounge_vlc/'
              linkTitle='Instagram'
              skills='Product design' />
            <CardItem src='/images/shakki2.png'
              title='Chess game'
              description='Local web-based chess app designed for players seeking precise move tracking'
              label='java, maven, mariadb'
              details='
              Chess Game is a local web-based chess application tailored for players seeking precise move tracking. 
              Developed using Java and Maven, with MariaDB integration for efficient data storage, 
              this project contributes to an accessible and user-friendly chess experience.'
              link='https://github.com/aikkuvo333/Chess-game'
              linkTitle='Github'
              skills='Java, MariaDB' />
            <CardItem src='/images/apteekki.png'
              title='Pharmacy simulator'
              description='Pharmacy capacity testing simulator to optimize the handling of visitor traffic in pharmacies.'
              label='java'
              details='
              Pharmacy Simulator is a Java-based application designed to simulate and optimize pharmacy workflows, focusing on testing and enhancing visitor traffic handling. 
              The simulator aims to streamline operations for small pharmacies, ensuring efficient capacity planning.'
              link='https://github.com/aikkuvo333/PharmacySimulator'
              linkTitle='Github'
              skills='Java, CSS, Hibernate, MariaDBConnector' />
            <CardItem
              src='images/analytics.png'
              imgtext='Image source: https://www.semrush.com/blog/google-analytics-dashboard/'
              title='Website Behaviour Tracking'
              description='Analyzing and reporting user behaviour for a website to increase the conversion rate.'
              label='google analytics'
              details='
              Website Behavior Tracking involves analyzing and reporting user behavior for a construction engineering company`s website to increase the conversion rate.
              Through the implementation of Google Tag Manager, Hotjar analytics, and customized Google Studios reports, 
              After the recommendations were implemented the conversion rate increased by 65% percent.'
              skills='Google analytics, Hotjar, Freelance' />
            <CardItem src='/images/track.png'
              title='Track'
              description='Calorie Tracking Web Application featuring built-in recipes and training videos.'
              label='vue, javascript, html, css'
              details='
              Track is a Vue-based Calorie Tracking Web Application featuring built-in recipes and training videos. 
              This project, developed with Vue, JavaScript, HTML, and CSS, offers users an intuitive and feature-rich tool for precise calorie tracking and fitness management.'
              link='https://github.com/aikkuvo333/TrackWebApplication'
              linkTitle='Github'
              skills='Vue, JavaScript, HTML, CSS, API' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
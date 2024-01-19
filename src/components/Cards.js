import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards' id='projects_section'>
      <h1>Projects</h1>
      <p>Here you can find some of my personal as well as university projects</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='/images/ecolounge.jpg'
              title='Ecolounge'
              description='Ecolounge is sun chair made out of recycled ocean plastic waste for the marina of Valencia.'
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
              skills='product design' />
            <CardItem src='/images/image2.jpg'
              title='Chess game'
              description='Chess game is a local web-based chess app'
              label='java, maven, mariadb'
              details='Project Scope:
              Developing a local web-based chess app in Java using Maven and integrating MariaDB for efficient data storage.
              Tasks:
              - Participated in UI/UX design and application logic.
              - Served as one of the Scrum Masters, ensuring agile efficiency. - Conducted testing and comprehensive documentation.
              Outcome:
              User-friendly and accessible local web-based chess application with multi-language options.'
              link=''
              linkTitle=''
              skills='java, mariadb'/>
            <CardItem src='/images/image2.jpg'
              title='Pharmacy simulator'
              description='Pharmacy capacity simulator a testing simulator'
              label='java'
              details='Project Scope:
              Creating a pharmacy capacity testing simulator using Java, CSS, Hibernate, and MariaDBConnector.
              Tasks:
              -Implemented application logic
              -Conducted thorough testing and documentation
              Outcome:
              Capacity testing simulator'
              link='https://github.com/aikkuvo333/PharmacySimulator'
              linkTitle='Github'
              skills='Java, CSS, Hibernate, MariaDBConnector' />
            <CardItem
              src='images/image2.jpg'
              title='Website Behaviour Tracking'
              description='Analyzing and reporting User behaviour for a construction engineering company’s website'
              label='google analytics'
              details='Project Scope:
              Analyzing and reporting User behaviour for a website to increase the conversion rate.
              Tasks:
              -Implemented Google Tag Manager for a construction engineering company’s website -Using Hotjar web analytics tool for visual representations of user interaction heatmaps -Improvement suggestions for the client based on the analytics
              -Created a customized Google Studios report for a Google Ad campaign
              -Provided documentation for report and Tag Manager
              Outcome:
              After the recommendations were implemented the conversion rate increased by 65% percent. (from 6 to 10 conversions per month)'
              link=''
              linkTitle=''
              skills='Google analytics, Hotjar, Freelance' />
            <CardItem src='/images/track2.png'
              title='Track'
              description='Track is a calorie tracking Web-application'
              label='vue, javascript, html, css'
              details='Project Scope:
              Creating a Vue-based calorie tracking Web-application using JavaScript, HTML, and CSS.
              Tasks:
              -Designed UI for optimal user experience.
              -Integrated APIs for recipe retrieval.
              -Developed application logic for precise calorie tracking.
              Outcome:
              An intuitive calorie tracking Web-application with multiple features such as recipe search and training video accessibility.'
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
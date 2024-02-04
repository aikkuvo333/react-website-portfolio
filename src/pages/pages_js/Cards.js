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
        <p>Take a look at my <b><a href="/files/cv_en.pdf" target="_blank">resume</a></b>! </p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='/images/ecolounge.jpg'
              title='Ecolounge'
              type='University project'
              description='Sun chair made out of recycled ocean plastic waste for the marina of Valencia.'
              label='product design'
              details={`
              Ecolounge is an innovative project where we developed a sun chair prototype using recycled 
              ocean plastic waste for the marina of Valencia, Spain in collaboration with international peers.

              My responsibilities:
              - Point of contact for client communication
              - Assisting role in designing and developing a sustainable sunchair prototype using recycled plastic waste sourced from the ocean.
              - Maret research
              - Prototype production

              The client has incorporated our prototype into their ongoing research and development initiatives, 
              underscoring the project's significance and impact.`}
              link='https://www.instagram.com/ecolounge_vlc/'
              linkTitle='Instagram'
              skills='Product design' />
            <CardItem src='/images/shakki2.png'
              title='Chess game'
              type='University project'
              description='Local web-based chess app designed for players seeking precise move tracking'
              label='java, maven, mariadb'
              details={`
              Chess Game is a local web-based chess application tailored for players seeking precise move tracking. 
              Developed using Java and Maven, with MariaDB integration for efficient data storage, 
              this project contributes to an accessible and user-friendly chess experience.
              
              
              Project Scope:
              Developing a local web-based chess app in Java using Maven and integrating MariaDB for efficient data storage.
              
              Tasks:
              - Participated in UI/UX design and application logic.
              - Served as one of the Scrum Masters, ensuring agile efficiency. 
              - Conducted testing and comprehensive documentation.
              
              Outcome:
              User-friendly and accessible local web-based chess application with multi-language options.`}
              link='https://github.com/aikkuvo333/Chess-game'
              linkTitle='Github'
              skills='Java, MariaDB' />
            <CardItem src='/images/apteekki.png'
              title='Pharmacy simulator'
              type='University project'
              description='Pharmacy capacity testing simulator to optimize the handling of visitor traffic in pharmacies.'
              label='java'
              details={`
              Pharmacy Simulator is a Java-based application designed to simulate and optimize pharmacy workflows, focusing on testing and enhancing visitor traffic handling. 
              The simulator aims to streamline operations for small pharmacies, ensuring efficient capacity planning.
              
              Project Scope:
              Creating a pharmacy capacity testing simulator using Java, CSS, Hibernate, and MariaDBConnector.
              
              Tasks:
              -Implemented application logic
              -Conducted thorough testing and documentation
              
              Outcome:
              Capacity testing simulator`}
              link='https://github.com/aikkuvo333/PharmacySimulator'
              linkTitle='Github'
              skills='Java, CSS, Hibernate, MariaDBConnector' />
            <CardItem
              src='images/analytics.png'
              imgtext='Image source: https://www.semrush.com/blog/google-analytics-dashboard/'
              title='Website Behaviour Tracking'
              type='Freelance project'
              description='Analyzing and reporting user behaviour for a website to increase the conversion rate.'
              label='google analytics'
              details={`
              Website Behavior Tracking involves analyzing and reporting user behavior for a construction engineering company's website to increase the conversion rate.
              Through the implementation of Google Tag Manager, Hotjar analytics, and customized Google Studios reports, 
              After the recommendations were implemented the conversion rate increased by 65% percent.
              
              Project Scope:
              Analyzing and reporting User behaviour for a website to increase the conversion rate.
              
              Tasks:
              -Implemented Google Tag Manager for an construction engineering company's website -Using Hotjar web analytics tool for visual representations of user interaction heatmaps -Improvement suggestions for the client based on the analytics
              -Created a customized Google Studios report for a Google Ad campaign
              -Provided documentation for report and Tag Manager
              
              Outcome:
              After the recommendations were implemented the conversion rate increased by 65% percent. 
              (from 6 to 10 conversions per month)`}
              skills='Google analytics, Hotjar, Freelance' />
            <CardItem src='/images/track.png'
              title='Track'
              type='University project'
              description='Calorie Tracking Web Application featuring built-in recipes and training videos.'
              label='vue, javascript, html, css'
              details={`
              Track is a Vue-based Calorie Tracking Web Application featuring built-in recipes and training videos. 
              This project, developed with Vue, JavaScript, HTML, and CSS, offers users an intuitive and feature-rich tool for precise calorie tracking and fitness management.
              
              Project Scope:
              Creating a Vue-based calorie tracking Web-application using JavaScript, HTML, and CSS.
              
              Tasks:
              -Designed UI for optimal user experience.
              -Integrated APIs for recipe retrieval.
              -Developed application logic for precise calorie tracking.

              Outcome:
              An intuitive calorie tracking Web-application with multiple features such as recipe search and training video accessibility.`}
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
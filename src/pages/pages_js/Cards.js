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
              details_overview={`
              Ecolounge is an innovative project, sought to create a sustainable solution for the marina of Valencia by developing a sun chair prototype from recycled ocean plastic waste. In collaboration with international peers, we crafted this environmentally conscious solution, which our client has seamlessly incorporated into their ongoing research and development initiatives, underscoring the project's significance and impact.`}
              responsibilites_header={`My responsibilities:`}
              details_responsibilities={`Point of contact for client communication, Assisting role in designing and developing the prototype, Market research, Prototype production`}
              link='https://www.instagram.com/ecolounge_vlc/'
              linkTitle='Instagram'
              skills='Product design' />
            <CardItem src='/images/shakki2.png'
              title='Chess game'
              type='University project'
              description='Local web-based chess app designed for players seeking precise move tracking'
              label='java, maven, mariadb'
              details_overview={`
              Chess Game is a local web-based chess app designed for precise move tracking. 
              Developed with Java, Maven, and MariaDB integration, it offers a user-friendly experience with multilanguage support and the ability to save players' moves and scores.`}
              details_responsibilities={`UI/UX design, Participating in application logic, Serving as one of the Scrum Masters, Ensuring agile efficiency, Comprehensive testing`}
              responsibilites_header={`My responsibilities:`}
              link='https://github.com/aikkuvo333/Chess-game'
              linkTitle='Github'
              skills='Java, MariaDB' />
            <CardItem src='/images/apteekki.png'
              title='Pharmacy simulator'
              type='University project'
              description='Pharmacy capacity testing simulator to optimize the handling of visitor traffic in pharmacies.'
              label='java'
              details_overview={`
              Pharmacy Simulator is a Java-based application designed to simulate and optimize pharmacy workflows, focusing on testing and enhancing visitor traffic handling. 
              The simulator aims to streamline operations for small pharmacies, ensuring efficient capacity planning.`}
              details_responsibilities={`Implementing application logic, Thorough testing, Documentation`}
              responsibilites_header={`My responsibilities:`}
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
              details_overview={`
              Website Behavior Tracking involves analyzing and reporting user behavior for a construction engineering company's website to increase the conversion rate.
              Through the implementation of Google Tag Manager, Hotjar analytics, and customized Google Studios reports, the recommendations led to a 65% increase in the conversion rate`}
              responsibilites_header={`My responsibilities:`}
              details_responsibilities={`Implementing Google Tag Manager for the website, Using Hotjar web analytics tool for visual representations of user interaction heatmaps, Improvement suggestions for the client based on the analytics, Creating a customized Google Studios report for a Google Ad campaign, Providing documentation for Google Studios report and Tag Manager`}
              skills='Google analytics, Hotjar, Google Studio' />
            <CardItem src='/images/track.png'
              title='Track'
              type='University project'
              description='Calorie Tracking Web Application featuring built-in recipes and training videos.'
              label='vue, javascript, html, css'
              details_overview={`
              Track is a Vue-based Calorie Tracking Web Application featuring built-in recipes and training videos. 
              This project, developed with Vue, JavaScript, HTML, and CSS, offers users an intuitive and feature-rich tool for precise calorie tracking and fitness management.`}
              responsibilites_header={`My responsibilities:`}
              details_responsibilities={`Designing the UI for optimal user experience, Integrating APIs for recipe retrieval, Developing application logic for precise calorie tracking`}
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
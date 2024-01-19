import React, { useEffect } from 'react';
import './Lightbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Lightbox(props) {

  const closeLightbox = () => {
    props.onClick(); 
    document.body.classList.remove('lightbox-open'); 

  };

  useEffect(() => {
    document.body.classList.add('lightbox-open');
    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, []); 

  return (

    <div>
      <div className="backdrop" onClick={closeLightbox} />
      <aside>
        <div className="lightbox">
          <div className='lightbox-top'>
            <FontAwesomeIcon icon={faArrowCircleLeft} className="close" onClick={closeLightbox} />
          </div>
          <div className="lightbox-content">
            <h2>{props.title}</h2>
            <div className='projectDetails_image'>
              <img alt='Project' className='lightbox-image' src={props.src} />
            </div>
            <div className='projectDetails_description'>
              <h4 className='projectDetails_contentTitle'>About</h4>
              <p className='projectDetails_overview'>{props.details}</p>
            </div>
            <div className='projectDetails_toolsUsed'>
              <h4 className='projectDetails_contentTitle'>Tools Used</h4>
              <div className='skills'>
                {props.skills.split(', ').map((skills, index) =>
                  (<div key={index} className='skills_skill'>{skills}</div>))}
              </div>
            </div>
            <div className='projectDetails_links'>
              <h4 className='projectDetails_contentTitle'>Website</h4>
              <a href={props.link} target="_blank" rel="noreferrer" aria-label='open website link'>{props.linkTitle}</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Lightbox;

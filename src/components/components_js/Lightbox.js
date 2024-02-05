import React, { useEffect, useState } from 'react';
import '../components_css/Lightbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Lightbox(props) {
  const [existingWebsite, setExistingWebsite] = useState(false);
  const [existingImgText, setExistingImgText] = useState(false);

  const closeLightbox = () => {
    props.onClick();
    document.body.classList.remove('lightbox-open');
  };

  useEffect(() => {
    if (props.link) {
      setExistingWebsite(true);
    }

    if (props.imgtext) {
      setExistingImgText(true);
    }

    document.body.classList.add('lightbox-open');
    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, [props.link, props.imgtext]);

  return (

    <div>
      <div className="backdrop" onClick={closeLightbox} />
      <aside className='aside'>
        <div className="lightbox">
          <div className='lightbox-top'>
            <Link className='lightbox-return' onClick={closeLightbox}>
              <FontAwesomeIcon icon={faCircleChevronLeft} className="return" />
              <span className="back-to-projects-text">Back to projects</span>
            </Link>
            <div className="separator" />
          </div>
          <div className="lightbox-content">
            <div className='projectDetails_header'>
              <h2>{props.title}</h2>
              <span className='projectDetails_type'>{props.type}</span>
            </div>
            <div className='projectDetails'>
              <div className='projectDetails_image'>
                <img alt='Project' className='lightbox-image' src={props.src} />
                {existingImgText && <span className='image-source'>{props.imgtext}</span>}
              </div>
              <div className='empty_space'></div>
              <div className='projectDetails_info'>
                <div className='projectDetails_description'>
                  <h4 className='projectDetails_contentTitle_About'>About</h4>
                  <div className='projectDetails_responsibilities'>
                    <p className='projectDetails_overview'>{props.details_overview}</p>
                    <div className='responsibilites'>
                      <span className='responsibilites_header'>{props.responsibilites_header}</span>
                      <div className='bulletpoints'>
                        {props.details_responsibilities.split(', ').map((details_responsibilities, index) =>
                          (<li key={index} className='projectDetails_responsibilities'>{details_responsibilities}</li>))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='projectDetails_toolsUsed'>
                  <h4 className='projectDetails_contentTitle'>Skills</h4>
                  <div className='skills'>
                    {props.skills.split(', ').map((skills, index) =>
                      (<div key={index} className='skills_skill'>{skills}</div>))}
                  </div>
                </div>
                {existingWebsite && <div className='projectDetails_links'>
                  <h4 className='projectDetails_contentTitle'> <FontAwesomeIcon icon={faEarthEurope} /> Website</h4>
                  <a href={props.link} target="_blank" rel="noreferrer" aria-label='open website link'>{props.linkTitle}</a>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Lightbox;

import React, { useEffect, useState } from 'react';
import '../components_css/Lightbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Lightbox(props) {
  const [existingAttribute, setExistingAttribute] = useState(false);

  const closeLightbox = () => {
    props.onClick();
    document.body.classList.remove('lightbox-open');
  };

  useEffect(() => {
    // Check if the attribute exists in props
    if (props.link) {
      setExistingAttribute(true);
    }
    document.body.classList.add('lightbox-open');
    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, [props.link]);

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
            <h2>{props.title}</h2>
            <div className='projectDetails'>
              <div className='projectDetails_image'>
                <img alt='Project' className='lightbox-image' src={props.src} />
              </div>
              <div className='empty_space'></div>
              <div className='projectDetails_info'>
                <div className='projectDetails_description'>
                  <h4 className='projectDetails_contentTitle'>About</h4>
                  <p className='projectDetails_overview'>{props.details}</p>
                </div>
                <div className='projectDetails_toolsUsed'>
                  <h4 className='projectDetails_contentTitle'>Skills</h4>
                  <div className='skills'>
                    {props.skills.split(', ').map((skills, index) =>
                      (<div key={index} className='skills_skill'>{skills}</div>))}
                  </div>
                </div>
                {existingAttribute && <div className='projectDetails_links'>
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

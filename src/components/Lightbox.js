import React, { useEffect, useState } from 'react';
import './Lightbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faArrowUpRightFromSquare, faEarthEurope } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faCircleChevronLeft} className="return" onClick={closeLightbox} />
            <div className="separator" />
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
        {existingAttribute && <a href={props.link} className='projectDetails_openProject' target='_blank' rel='noreferrer' aria-label='open website link'>
          Open project
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='openLink' />
        </a>}
      </aside>
    </div>
  );
};

export default Lightbox;

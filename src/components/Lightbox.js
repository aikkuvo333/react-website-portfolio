import React from 'react';
import './Lightbox.css'; 
import { Button } from './Button';

function Lightbox(props) {

  const closeLightbox = () => {
    props.onClick(); //call the onclick function from the parent
  };

  return (
    <div>
          <div className="backdrop" onClick={closeLightbox}></div>
          <div className="lightbox">
          <Button buttonStyle='btn--white' className="close" onClick={closeLightbox}>Close</Button>
            <div className="lightbox-content">
              <h2>{props.title}</h2>
              <div className='projectDetails_image'>
                <img alt='Project' src={props.src}></img>
              </div>
              <div className='projectDetails_description'>
                <h2 className='projectDetails_contentTitle'>Project Overview</h2>
                <p>{props.details}</p>
              </div>
              <div className='projectDetails_toolsUsed'>
                <h2 className='projectDetails_contentTitle'>Tools Used</h2>
                <div className='skills'>
                  <div className='skills_skill'>{props.skills}</div>
                  <div className='skills_skill'>{props.skills}</div>
                </div>
              </div>
              <div className='projectDetails_links'>
                <h2 className='projectDetails_links'>Links</h2>
                <a href={props.link} target="_blank" rel="noreferrer" aria-label='open website link'>{props.linkTitle}</a>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Lightbox;

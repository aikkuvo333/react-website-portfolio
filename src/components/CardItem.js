import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox';

function CardItem(props) {

  const [showLightbox, setShowLightbox] = useState(false);

  const openLightbox = () => {
    setShowLightbox(true);
  }

  const closeLightbox = () => {
    setShowLightbox(false);
  }

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' onClick={openLightbox}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Description' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
        </Link>
      </li>
      {showLightbox && <Lightbox onClick={closeLightbox} title={props.title} src={props.src} details={props.details} link={props.link} linkTitle={props.linkTitle} skills={props.skills}></Lightbox>}
    </>
  );
}

export default CardItem;
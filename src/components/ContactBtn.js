import React from 'react';
import './ContactBtn.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--white', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const ContactBtn = ({
    children,
    type,
    onClick,
    btnStyle,
    btnSize
}) => {
    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    const scrollToContactForm = () => {
        document.getElementById('contact_section').scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <Link className='btn-mobile'>
            <btn className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick || scrollToContactForm} type={type}>
                {children}
            </btn>
        </Link>
    )
};
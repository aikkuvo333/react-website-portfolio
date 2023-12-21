import React from 'react';
import './ContactButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--white', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const ContactButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const scrollToContactForm = () => {
        document.getElementById('contact_section').scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <Link className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick || scrollToContactForm} type={type}>
                {children}
            </button>
        </Link>
    )
};
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn-outline'];
const SIZES = ['btn--medium', 'btn-large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; //necessary?

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; //necessary?

    return (
        <Link to='/contact' className='btn-mobile'>
            <button className={'btn '}>
                {children}
            </button>
        </Link>
    )
};

function Button() {
  return (
    <div>
      
    </div>
  )
}

export default Button

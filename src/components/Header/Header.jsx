import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="hamburger flex__column">
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
            </div>
        </div>
    )
}

export default Header;

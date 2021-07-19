import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="Header">
            <h1 className="Logo">Image Finder</h1>
            <div className="UserProfile"><FontAwesomeIcon icon={faUser} /></div>
        </div>
    )
}

export default Header

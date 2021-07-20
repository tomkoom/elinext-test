import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
		<div className="Header">
			<a href="/">
				<h1 className="Logo">ImageFinder</h1>
			</a>

			<div className="UserProfile">
				<FontAwesomeIcon icon={faUser} size="lg" color="#718096" />
			</div>
		</div>
	);
}

export default Header

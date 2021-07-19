import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
                <li><FontAwesomeIcon icon={faSearch} size="2x" /></li>
                <li><FontAwesomeIcon icon={faBookmark} size="2x" /></li>
            </ul>
        </div>
    )
}

export default Sidebar;

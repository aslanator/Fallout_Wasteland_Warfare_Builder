import React from 'react';
import Link from '../../Components/Buttons/Link/Link';
import './style.scss';

function StartMenu() {
    return (
        <div className="start-menu">
            <Link to="/faction-selection">Create new</Link>
            <Link to="/select-build">Pick from existing</Link>
        </div>
    );
}

export default StartMenu;

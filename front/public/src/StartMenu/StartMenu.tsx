import React from 'react';
import { Link } from 'react-router-dom';

function StartMenu() {
    return (
        <div className="start-menu">
            <Link to="/faction-selection">Create new</Link>
            <button>Pick from existing</button>
        </div>
    );
}

export default StartMenu;

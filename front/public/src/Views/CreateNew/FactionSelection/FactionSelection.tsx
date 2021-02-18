import React from 'react';
import Header from 'Components/Header/Header';
import Button from 'Components/Buttons/Button/Button';
import './style.scss';
import Link from 'Components/Buttons/Link/Link';
import factions from 'Constants/factions';

function FactionSelection() {
    const factionsRender = Array.from(factions.entries()).map(([slug, faction]) =>
        <li className="faction-selection__list-item" key={slug}>
            <Link to={`/create/${slug}`}>{faction.title}</Link>
        </li>
    );

    return (
        <div className="faction-selection">
            <Header>
                Faction Selection
            </Header>
            <div className="faction-selection__content">
                <ul className="faction-selection__list">
                    {factionsRender}
                </ul>
            </div>
        </div>
    );
}

export default FactionSelection;

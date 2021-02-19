import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest';

function UnitCard({unit}: {unit: Unit}) {
    return (
        <div className="unit-card">
            {unit.title}
        </div>
    );
}

export default UnitCard;

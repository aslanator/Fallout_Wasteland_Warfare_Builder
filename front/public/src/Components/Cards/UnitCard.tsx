import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import {ReactComponent  as Trash} from 'Assets/Icons/trash.svg'

type UnitProps = {
    unit: Unit,
    onDelete?: (() => void) | null,
}

function UnitCard({unit, onDelete = null}: UnitProps) {
    return (
        <div className="unit-card">
            <img src={`/cards/units/${unit.title.trim().toUpperCase()}.jpg`} alt={`card-${unit.title}`}/>
            {onDelete ? <div className="unit-card__delete" onClick={onDelete}><Trash /></div> : ''}
        </div>
    );
}

export default UnitCard;

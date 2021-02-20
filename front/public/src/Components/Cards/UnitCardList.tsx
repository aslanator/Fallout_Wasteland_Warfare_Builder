import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import UnitCard from './UnitCard';
import {WithKey} from '../../Types/data';

type UnitCardListProps = {
    units: WithKey<Unit>[];
    onDelete: (key: string) => void
}

function UnitCardList({units, onDelete}: UnitCardListProps) {
    const unitsList = units.map(unit =>
        <UnitCard key={unit.key} unit={unit} onDelete={() => onDelete(unit.key)} />)
    return (
        <ul className="card-list">
            {unitsList}
        </ul>
    );
}

export default UnitCardList;

import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import UnitCard from './UnitCard';

type UnitCardListProps = {
    units: Record<string, Unit>;
    onDelete: (key: string) => void
}

function UnitCardList({units, onDelete}: UnitCardListProps) {
    const unitsList = Object.entries(units).map(([key, unit]) =>
        <UnitCard unit={unit} onDelete={() => onDelete(key)} />)
    return (
        <ul className="card-list">
            {unitsList}
        </ul>
    );
}

export default UnitCardList;

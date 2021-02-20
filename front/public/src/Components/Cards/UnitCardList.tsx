import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import UnitCard from './UnitCard';
import {Card, onCanDrop} from './dataCards';
import DraggableUnitCard from './DraggableUnitCard';

type UnitCardListProps = {
    units: Card<Unit>[];
    onDelete: (key: string) => void,
    onCardDrop?: onCanDrop
}

function UnitCardList({units, onDelete, onCardDrop = undefined}: UnitCardListProps) {
    const unitsList = units.map(unit =>
        onCardDrop ? <DraggableUnitCard onCardDrop={onCardDrop} key={unit.key} unit={unit} onDelete={() => onDelete(unit.key)} />
            : <UnitCard key={unit.key} unit={unit} onDelete={() => onDelete(unit.key)} />)
    return (
        <ul className="card-list">
            {unitsList}
        </ul>
    );
}

export default UnitCardList;

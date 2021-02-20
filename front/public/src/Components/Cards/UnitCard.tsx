import React, {MouseEventHandler} from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import {ReactComponent  as Trash} from 'Assets/Icons/trash.svg'
import {Card} from './dataCards';
import { useDrag } from 'react-dnd'
import {UNIT_CARD_TYPE} from 'Constants/CardTypes';
import {DragObjectWithType} from 'react-dnd/lib/interfaces';

type UnitProps = {
    unit: Card<Unit>,
    onDelete?: (() => void) | null,
    onPick?: MouseEventHandler,
}


function UnitCard({unit, onDelete = null, onPick = () => {} }: UnitProps) {

    return (
        <div className="unit-card" onClick={onPick} >
            <img src={`/cards/units/${unit.title.trim().toUpperCase()}.jpg`} alt={`card-${unit.title}`}/>
            {onDelete ? <div className="unit-card__delete" onClick={onDelete}><Trash /></div> : ''}
        </div>
    );
}

export default UnitCard;

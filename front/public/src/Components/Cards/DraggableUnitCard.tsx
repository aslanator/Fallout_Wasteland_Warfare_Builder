import React, {MouseEventHandler} from 'react';
import './style.scss';
import {useDrag, useDrop} from 'react-dnd';
import {Card, onCanDrop} from './dataCards';
import {Unit} from '../../Requests/UnitRequest';
import {DragObjectWithType} from 'react-dnd/lib/interfaces';
import {UNIT_CARD_TYPE} from '../../Constants/CardTypes';
import UnitCard from './UnitCard';
type UnitProps = {
    unit: Card<Unit>,
    onDelete?: (() => void) | null,
    onPick?: MouseEventHandler,
    onCardDrop: onCanDrop
}

type DragObject = Card<Unit> & DragObjectWithType

function DraggableUnitCard({unit, onDelete, onPick, onCardDrop}: UnitProps) {
    const [{ isDragging }, drag] = useDrag<DragObject, any, {isDragging: boolean}>({
        item: {...unit, type: UNIT_CARD_TYPE },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    const [{isOver}, drop] = useDrop<DragObject, any, {isOver: boolean}>({
        accept: UNIT_CARD_TYPE,
        drop: (droppedUnit) => {
            console.log(droppedUnit);
            onCardDrop(droppedUnit.key, unit.key);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div
            className='unit-card__draggable'
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: isDragging ? 'move' : 'default'
            }}
        >
            <div ref={drop} className="unit-card__draggable-line"
                 style={{background: isOver ? 'var(--secondary4)' : 'transparent'}}>
            </div>
            <UnitCard unit={unit} onDelete={onDelete} onPick={onPick} />
        </div>
    );
}

export default DraggableUnitCard;

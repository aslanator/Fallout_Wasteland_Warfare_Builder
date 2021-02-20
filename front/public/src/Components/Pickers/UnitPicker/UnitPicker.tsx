import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import PickableUnitCard from './PickableUnitCard';
import ReactModal from 'react-modal';
import {Card} from 'Components/Cards/dataCards';
import {crewBuilderOnPick} from 'Views/CreateNew/CrewBuilder/crewBuilder.types';

export type UnitPicker = {
    isOpen: boolean,
    units: Card<Unit>[],
    close: () => void,
    onPick: crewBuilderOnPick,
};

function UnitPicker({isOpen, units, close, onPick}: UnitPicker) {
    const unitList = units.map(unit =>
        <PickableUnitCard key={unit.title} unit={unit} close={close} onPick={onPick} />
    )
    return (
        <ReactModal isOpen={isOpen} onRequestClose={close}>
            <div className="unit-picker">
                <ul className="unit-picker__list">
                    {unitList}
                </ul>
            </div>
        </ReactModal>
    );
}

export default UnitPicker;

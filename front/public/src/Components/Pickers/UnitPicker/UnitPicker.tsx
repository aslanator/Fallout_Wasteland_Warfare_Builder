import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import PickableUnitCard from './PickableUnitCard';
import ReactModal from 'react-modal';

function UnitPicker({isOpen, units, close}: {isOpen: boolean, units: Unit[], close: () => void}) {
    const unitList = units.map(unit =>
        <PickableUnitCard key={unit.title} unit={unit} close={close} />
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

import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest'
import UnitCard from './UnitCard';
import ReactModal from 'react-modal';

function UnitPicker({isOpen, units}: {isOpen: boolean, units: Unit[]}) {
    const unitList = units.map(unit =>
        <UnitCard key={unit.title} unit={unit} />
    );

    return (
        <ReactModal isOpen={isOpen}>
            <div className="unit-picker">
                <ul>
                    {unitList}
                </ul>
            </div>
        </ReactModal>
    );
}

export default UnitPicker;

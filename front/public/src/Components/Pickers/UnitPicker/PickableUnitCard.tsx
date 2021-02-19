import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest';
import {useDispatch} from 'react-redux';
import {pickACard} from 'Views/CreateNew/CrewBuilder/crewBuilderSlice';
import UnitCard from '../../Cards/UnitCard';

function PickableUnitCard({unit, close}: { unit: Unit, close: () => void }) {
    const dispatch = useDispatch();
    function onPick() {
        dispatch(pickACard(unit));
        close();
    }
    return (
        <div onClick={onPick}>
            <UnitCard unit={unit} />
        </div>
    );
}

export default PickableUnitCard;

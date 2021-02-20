import React from 'react';
import './style.scss';
import {Unit} from 'Requests/UnitRequest';

import UnitCard from '../../Cards/UnitCard';
import {Card} from '../../Cards/dataCards';
import {crewBuilderOnPick} from 'Views/CreateNew/CrewBuilder/crewBuilder.types';

export type PickableUnitCardProps = {
    unit: Card<Unit>,
    close: () => void
    onPick: crewBuilderOnPick,
};

function PickableUnitCard({unit, onPick, close}: PickableUnitCardProps) {
    return (
        <div onClick={() => {
            onPick(unit);
            close();
        }}>
            <UnitCard unit={unit} />
        </div>
    );
}

export default PickableUnitCard;

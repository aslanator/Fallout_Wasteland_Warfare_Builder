import React, {useEffect, useState} from 'react';
import './style.scss';
import UnitPicker from 'Components/Pickers/UnitPicker/UnitPicker';
import AddNewCard from 'Components/Buttons/AddNewCard/AddNewCard';
import {FACTIONS} from 'Constants/factions';
import {loadUnits, selectUnits, selectPickedUnits, removeACard, pickACard, moveACard} from './crewBuilderSlice';
import {useDispatch, useSelector} from 'react-redux';
import UnitCardList from 'Components/Cards/UnitCardList';
import {Unit} from 'Requests/UnitRequest';
import {Card} from 'Components/Cards/dataCards';
import CardBoard from 'Components/Board/CardBoard';

function CrewBuilder({faction}: {faction: FACTIONS}) {
    const dispatch = useDispatch();
    const units = useSelector(selectUnits);
    const pickedUnits = useSelector(selectPickedUnits);
    const [unitPickerOpen, setUnitPickerOpen] = useState(false);
    useEffect(() => {
        dispatch(loadUnits);
    }, [])

    function closeUnitPicker() {
        setUnitPickerOpen(false);
    }

    function onRemoveCard(key: string) {
        dispatch(removeACard(key));
    }

    function onPick(unit: Card<Unit>) {
        dispatch(pickACard(unit));
    }

    function onCardDrop(droppedCardKey: string, droppingPositionKey: string) {
        dispatch(moveACard({droppedCardKey, droppingPositionKey}));
    }

    return (
        <div className="crew-builder">
            <UnitPicker isOpen={unitPickerOpen} units={units} close={closeUnitPicker} onPick={onPick}/>
            <CardBoard>
                <div className="crew-builder__content">
                    <UnitCardList onCardDrop={onCardDrop} units={pickedUnits} onDelete={onRemoveCard}/>
                    <AddNewCard onClick={() => setUnitPickerOpen(true)}/>
                </div>
            </CardBoard>
        </div>
    );
}

export default CrewBuilder;

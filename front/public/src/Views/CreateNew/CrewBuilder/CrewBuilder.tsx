import React, {useEffect, useState} from 'react';
import './style.scss';
import UnitPicker from '../../../Components/Pickers/UnitPicker/UnitPicker';
import AddNewCard from '../../../Components/Buttons/AddNewCard/AddNewCard';
import {FACTIONS} from 'Constants/factions';
import {loadUnits, selectUnits, selectPickedUnits, removeACard} from './crewBuilderSlice';
import {useDispatch, useSelector} from 'react-redux';
import UnitCardList from '../../../Components/Cards/UnitCardList';

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

    return (
        <div className="crew-builder">
            <UnitPicker isOpen={unitPickerOpen} units={units} close={closeUnitPicker}/>
            <div className="crew-builder__content">
                <UnitCardList units={pickedUnits} onDelete={onRemoveCard}/>
                <AddNewCard onClick={() => setUnitPickerOpen(true)}/>
            </div>
        </div>
    );
}

export default CrewBuilder;

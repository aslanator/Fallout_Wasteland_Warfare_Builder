import React, {useEffect, useState} from 'react';
import './style.scss';
import UnitPicker from '../../../Components/Pickers/UnitPicker/UnitPicker';
import AddNewCard from '../../../Components/Buttons/AddNewCard/AddNewCard';
import {FACTIONS} from 'Constants/factions';
import {loadUnits} from './crewBuilderSlice';
import {useDispatch} from 'react-redux';

function CrewBuilder({faction}: {faction: FACTIONS}) {
    const dispatch = useDispatch();
    const [newCardOpen, setNewCardOpen] = useState(false);

    const units: any = [];

    useEffect(() => {
        console.log('123');
        dispatch(loadUnits());
    }, [])

    return (
        <div className="builder">
            <UnitPicker isOpen={newCardOpen} units={units}/>
            <div className="create-build__content">
                <AddNewCard onClick={() => setNewCardOpen(true)}/>
            </div>
        </div>
    );
}

export default CrewBuilder;

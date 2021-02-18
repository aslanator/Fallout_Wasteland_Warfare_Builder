import React from 'react';
import {useParams} from 'react-router-dom';
import './style.scss';
import Header from '../../../Components/Header/Header';
import factions from 'Constants/factions';
import Error404 from '../../ErrorPages/Error404/Error404';
import AddNewCard from '../../../Components/Buttons/AddNewCard/AddNewCard';


function Create() {
    const params = useParams<{faction: string}>();

    if(!factions.has(params.faction)) {
        return (
            <Error404/>
        )
    }
    const faction = factions.get(params.faction);

    return (
        <div className="create-build">
            <Header><>Create {faction!.title.toLowerCase()} build</></Header>
            <div className="create-build__content">
                <AddNewCard />
            </div>
        </div>
    );
}

export default Create;

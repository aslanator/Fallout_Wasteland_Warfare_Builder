import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import './style.scss';
import Header from 'Components/Header/Header';
import factions, {FACTIONS} from 'Constants/factions';
import Error404 from 'Views/ErrorPages/Error404/Error404';
import CrewBuilder from '../CrewBuilder/CrewBuilder';

function Create() {

    const params = useParams<{faction: FACTIONS}>();

    if(!factions.has(params.faction)) {
        return (
            <Error404/>
        )
    }
    const faction = factions.get(params.faction);

    return (
        <div className="create-build">
            <Header><>Create {faction!.title.toLowerCase()} build</></Header>
            <CrewBuilder faction={params.faction} />
        </div>
    );
}

export default Create;

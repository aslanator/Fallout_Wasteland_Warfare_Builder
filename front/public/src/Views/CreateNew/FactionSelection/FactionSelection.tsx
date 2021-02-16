import React from 'react';
import Header from '../../../Components/Header/Header';
import Button from '../../../Components/Buttons/Button/Button';
import './style.scss';
import {useDispatch, useSelector} from 'react-redux';
import {selectName, set} from './slice'

function FactionSelection() {
    const faction = useSelector(selectName);
    const dispatch = useDispatch();
    return (
        <div className="faction-selection">
            <Header>
                Faction Selection
            </Header>
            {faction}
            <ul className="faction-selection__list">
                <li className="faction-selection__list-item">
                    <button onClick={() => {dispatch(set('123'))}}>Brotherhood of steel</button>
                </li>
                <li className="faction-selection__list-item">
                    <Button>Creatures</Button>
                </li>
            </ul>
        </div>
    );
}

export default FactionSelection;

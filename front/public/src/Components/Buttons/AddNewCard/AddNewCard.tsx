import React from 'react';
import './style.scss';
import {ReactComponent  as Plus} from 'Assets/Icons/plus.svg'

function AddNewCard() {
    return (
        <button className="add-new-card">
            <Plus/>
        </button>
    );
}

export default AddNewCard;

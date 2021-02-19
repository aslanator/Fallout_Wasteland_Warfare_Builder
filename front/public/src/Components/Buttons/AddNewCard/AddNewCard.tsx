import React, {MouseEventHandler} from 'react';
import './style.scss';
import {ReactComponent  as Plus} from 'Assets/Icons/plus.svg'

function AddNewCard({onClick = () => {}}: {onClick: MouseEventHandler}) {
    return (
        <button className="add-new-card" onClick={onClick}>
            <Plus/>
        </button>
    );
}

export default AddNewCard;

import React, {MouseEventHandler} from 'react';
import './style.scss';

function AddNewCard({onClick = () => {}}: {onClick: MouseEventHandler}) {
    return (
        <button className="add-new-card" onClick={onClick} />
    );
}

export default AddNewCard;

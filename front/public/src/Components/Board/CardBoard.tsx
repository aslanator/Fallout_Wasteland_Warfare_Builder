import React, {ReactNode} from 'react';
import './style.scss';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

type CardBoardProps = {
    children: ReactNode | Node,
}

function CardBoard({children}: CardBoardProps) {
    return (
        <div className="card-board">
            <DndProvider backend={HTML5Backend}>
                {children}
            </DndProvider>
        </div>
    );
}

export default CardBoard;

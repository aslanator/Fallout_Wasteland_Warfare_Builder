import React, {ReactChild, ReactChildren} from 'react';
import './style.scss';

function Header({children}: {children: ReactChildren | ReactChild}) {
    return (
        <div className="header">
            {children}
        </div>
    );
}

export default Header;

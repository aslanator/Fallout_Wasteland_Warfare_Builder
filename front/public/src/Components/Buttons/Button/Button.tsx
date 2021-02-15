import React, { ReactChildren, ReactChild } from 'react';
import './style.scss'

export default function({children}: {children: ReactChild | ReactChildren}) {

    return (
        <button className="button">{children}</button>
    )
}

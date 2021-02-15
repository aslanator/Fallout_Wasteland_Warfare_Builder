import React, { ReactChildren, ReactChild } from 'react';
import {Link, LinkProps} from 'react-router-dom';
import './style.scss'

export default function({children, ...linkProps}: {children: ReactChild | ReactChildren} & LinkProps) {
    return (
        <Link {...linkProps} className="link">{children}</Link>
    )
}

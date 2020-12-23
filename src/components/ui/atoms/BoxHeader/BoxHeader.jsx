import React from 'react';

import s from './BoxHeader.module.sass'

function BoxHeader(props) {
    return (
        <div className={s.header}>
            {props.children}
        </div>
    );
}

export default BoxHeader;
import React from 'react';

//styles
import s from './Box.module.sass'

function Box(props) {
    return (
        <div className={s.box}>
            {props.children}
        </div>
    );
}

export default Box;
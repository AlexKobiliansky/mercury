import React from 'react';

import classnames from 'classnames'

import s from './Button.module.sass'


function Button(props) {
    return (
        <button
            className={classnames(s.button, {[props.customClass] : props.customClass})}
            onClick = {props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
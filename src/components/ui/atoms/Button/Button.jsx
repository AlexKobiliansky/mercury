import React from 'react';
import s from './Button.module.sass'

import classnames from 'classnames'

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
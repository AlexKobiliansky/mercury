import React from 'react';
import classnames from 'classnames';

//styles
import s from './Label.module.sass';

function Label(props) {
    return (
        <div className={classnames(s.label, {[props.customClass] : props.customClass})}>
            {props.children}
        </div>
    );
}

export default Label;
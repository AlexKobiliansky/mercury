import React from 'react';
import classnames from 'classnames';

//styles
import s from './Box.module.sass';

function Box(props) {
    return (
        <div  className={classnames(s.box, {[props.customClass] : props.customClass})}>
            {props.children}
        </div>
    );
}

export default Box;
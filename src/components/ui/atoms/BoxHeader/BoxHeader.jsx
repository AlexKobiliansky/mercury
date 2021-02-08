import React from 'react';

import classnames from 'classnames';

//styles
import s from './BoxHeader.module.sass'

function BoxHeader(props) {
    return (
        <div className={classnames(s.header, {[props.customClass] : props.customClass})}>
            {props.children}
        </div>
    );
}

export default BoxHeader;
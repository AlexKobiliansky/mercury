import React from 'react';

//styles
import classnames from 'classnames';

import Label from "../../ui/atoms/Label/Label";
import s from './UserInfo.module.sass';

function UserInfo(props) {

    let letter = props.name.charAt(0);

    return (
        <div className={s.container}>
            <div className={classnames(s.labelWrap, {[s.online]: props.online})}>
                <Label img={props.img} title={letter} customClass={s.label} />
            </div>

            <div className={s.content}>
                <div>{props.name}</div>
                <div className={s.post}>{props.post}</div>
            </div>
        </div>
    );
}

export default UserInfo;
import React from 'react';

import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import ReactTimeAgo from 'react-time-ago';

//styles
import clockSvg from '../../../img/icons/clock-icon.svg'
import s from './UserActivity.module.sass';
//icons

function UserActivity(props) {

    let lastVisit = new Date(Date.parse(props.lastVisit));

    return (
        <div className={classnames(s.activity, {[s.online]: props.online}) }>
            <ReactSVG src={clockSvg} wrapper='span'/>
            <span className={s.text}>
                {
                    props.online ? 'Online now' : <ReactTimeAgo date={lastVisit} locale="en-US"/>
                }
            </span>

        </div>
    );
}

export default UserActivity;
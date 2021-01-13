import React from 'react';

//functions
import numberWithCommas from '../../../functions/numberWithCommas'
//styles
import s from './TotalStats.module.sass'

function TotalStats(props) {
    return (
        <div className={s.totalStats}>
            <div className={s.content}>
                <div className={s.value}>{numberWithCommas(props.value)}</div>
                <div className={s.title}>{props.title}</div>
            </div>
            <div className={s.imgWrap}>
                <img src={props.img} alt="alt"/>
            </div>
        </div>
    );
}

export default TotalStats;
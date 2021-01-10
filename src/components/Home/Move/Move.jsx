import React from 'react';
import Label from "../../ui/atoms/Label/Label";
import { ReactSVG } from 'react-svg';
import TruncateMarkup from 'react-truncate-markup';

import clockSvg from '../../../img/icons/clock-icon.svg';

//styles
import s from './Move.module.sass'

function Move(props) {
    return (
        <div className={s.move}>
            <Label img={props.img}>N</Label>
            <div className={s.content}>

                <TruncateMarkup lines={1} ellipsis={' (...)'}>
                    <div className={s.title}>
                        <span className={s.name}>Nina Jones </span>
                        <span className={s.action}>added a new project </span>
                        <span className={s.object}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consequatur! </span>
                    </div>
                </TruncateMarkup>

                <div className={s.time}>
                    <ReactSVG src={clockSvg} wrapper='span'/>
                    <div className={s.timeText}>Just now</div>
                </div>
            </div>
        </div>
    );
}

export default Move;
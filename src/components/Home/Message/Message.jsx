import React from 'react';
import { ReactSVG } from 'react-svg';
import Label from "../../ui/atoms/Label/Label";
import TruncateMarkup from 'react-truncate-markup';

import answerSvg from '../../../img/icons/answer-icon.svg';
import optionsSvg from '../../../img/icons/options-icon.svg';

//styles
import s from './Message.module.sass'

function Message(props) {
    return (
        <div className={s.message}>
            <Label img={props.img}>N</Label>
            <div className={s.content}>
                <div className={s.title}>
                    <span className={s.name}>Nina Jones</span>
                    <span className={s.time}>5 minutes ago</span>
                </div>
                <TruncateMarkup lines={1} ellipsis={' (...)'}>
                    <div className={s.desc}>
                        Hey You! It’s me again :-) I attached new Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Id impedit maxime molestias officiis praesentium qui, velit!
                    </div>
                </TruncateMarkup>

                <div className={s.icons}>
                    <ReactSVG src={answerSvg} wrapper='span'/>
                    <ReactSVG src={optionsSvg} wrapper='span'/>
                </div>
            </div>
        </div>
    );
}

export default Message;
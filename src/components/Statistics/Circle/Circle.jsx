import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressProvider from "./ProgressProvider";
import {numberWithCommas} from "../../../utils";

//styles
import s from './Circle.module.sass'
import 'react-circular-progressbar/dist/styles.css';


function Circle(props) {

    let data = props.data;

    let percentage = data.percentage;

    let styles = {
        root: {
            width: '190px'
        },
        path: {
            transform: 'rotate(0.5turn)',
            transformOrigin: 'center center',
            stroke: props.color,
            transition: 'stroke-dashoffset 1s ease 0s',
        },
        trail: {
            stroke: '#dadee7',
            transform: 'rotate(0.5turn)',
            transformOrigin: 'center center',
        },
        text: {
            fill: props.color,
            fontSize: '24px',
            fontWeight: '500'
        },
    }

    return (
        <div className={s.circle}>
            <ProgressProvider valueStart='0' valueEnd={percentage}>
                { value => <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={styles}
                strokeWidth='11'
            /> }
            </ProgressProvider>
            <div className={s.content}>
                <div className={s.value}>{numberWithCommas(data.value)}</div>
                <div className={s.title}>{data.title}</div>
            </div>
        </div>
    );
}

export default Circle;
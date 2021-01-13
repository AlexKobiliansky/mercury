import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
//styles
import s from './Circle.module.sass'
import 'react-circular-progressbar/dist/styles.css';

function Circle(props) {

    const percentage = 66;

    let styles = {
        root: {
            width: '190px'
        },
        path: {
            transform: 'rotate(0.5turn)',
            transformOrigin: 'center center',
            stroke: `red`,
        },
        trail: {
            stroke: '#dadee7',
            transform: 'rotate(0.5turn)',
            transformOrigin: 'center center',
        },
        text: {
            fill: 'red',
            fontSize: '24px',
        },

    }

    return (
        <div className={s.circle}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={styles}
                strokeWidth='11'
            />
            <div className={s.content}>
                <div className={s.value}>2,300$</div>
                <div className={s.title}>Direct Sales</div>
            </div>
        </div>
    );
}

export default Circle;
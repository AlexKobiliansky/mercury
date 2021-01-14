import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

//styles
import s from './Workflow.module.sass'
import TasksList from "./TasksList/TasksList";

let tasks = [
    {
        id: 1,
        title: 'New website for JCD.pl',
        description: 'description asdasdasd lorem100',
        doneStatus: 1,
        progressStatus: 0,
        deadline: '2022-01-26T13:51:50'
    },
    {
        id: 2,
        title: 'Free PSD Template vol. 3',
        description: 'description asdasdasd lorem100',
        doneStatus: 0,
        progressStatus: 0,
        deadline:  '2021-01-25T13:51:50'
    },
    {
        id: 3,
        title: 'Iconset Vol. 3',
        description: 'description asdasdasd lorem100',
        doneStatus: 0,
        progressStatus: 0,
        deadline:  '2021-01-07T13:51:50'
    },
    {
        id: 4,
        title: 'New logo for Apple',
        description: 'description asdasdasd lorem100',
        doneStatus: 0,
        progressStatus: 1,
        deadline:  '2020-01-26T13:51:50'
    },
    {
        id: 5,
        title: 'Daily UI Kit',
        description: 'description asdasdasd lorem100',
        doneStatus: 0,
        progressStatus: 1,
        deadline:  '2021-03-22T13:51:50'
    },
    {
        id: 6,
        title: 'Business Cards',
        description: 'description asdasdasd lorem100',
        doneStatus: 0,
        progressStatus: 1,
        deadline:  '2021-03-17T13:51:50'
    },
    {
        id: 7,
        title: 'Free PSD Template vol. 1',
        description: 'description asdasdasd lorem100',
        doneStatus: 1,
        progressStatus: 0,
        deadline:  '2020-11-03T13:51:50'
    },
    {
        id: 8,
        title: 'Iconset vol. 1',
        description: 'description asdasdasd lorem100',
        doneStatus: 1,
        progressStatus: 0,
        deadline:  '2021-07-01T13:51:50'
    },
    {
        id: 9,
        title: 'New website for Symu.co',
        description: 'description asdasdasd lorem100',
        doneStatus: 1,
        progressStatus: 1,
        deadline:  '2021-08-26T13:51:50'
    },
    {
        id: 10,
        title: 'Iconset vol. 2',
        description: 'description asdasdasd lorem100',
        doneStatus: 1,
        progressStatus: 0,
        deadline:  '2021-01-12T13:51:50'
    },
    {
        id: 11,
        title: 'New website for Windu.org',
        description: 'description asdasdasd lorem100',
        doneStatus: 0,
        progressStatus: 0,
        deadline: '2021-01-07T13:51:50'
    }
];

function Workflow(props) {

    return (
        <div className={s.workflow}>
            <TasksList />
            <TasksList />
            <TasksList />
        </div>
    );
}

export default withAuthRedirect(Workflow);
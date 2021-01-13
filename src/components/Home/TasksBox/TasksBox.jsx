import React from 'react';
import BoxHeader from "../../ui/atoms/BoxHeader/BoxHeader";
import Label from "../../ui/atoms/Label/Label";
import Task from "../../Workflow/Task/Task";
import Box from "../../ui/atoms/Box/Box";
//styles
import hs from "../Home.module.sass";

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

function TasksBox(props) {

    let today = new Date()

    let undoneTasks = tasks.reduce((number, current) => {
        return !current.doneStatus ? ++number : number
    }, 0);

    let delayedTasks = tasks.reduce((number, current) => {
        let date = new Date(Date.parse(current.deadline));
        return (date < today) ? ++number : number
    }, 0);

    let items = tasks.slice(0, 4);

    return (
        <Box>
            <BoxHeader customClass={hs.paddingHeader}>
                <h3>Tasks</h3>
                <div className={hs.labelsWrap}>
                    <Label title={undoneTasks} />
                    <Label customClass={hs.redLabel} title={delayedTasks} />
                </div>
            </BoxHeader>

            {
                items && items.map(task => {
                    return <Task
                        customClass={hs.task}
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        doneStatus={task.doneStatus}
                        progressStatus={task.progressStatus}
                        deadline={task.deadline}
                    />
                })
            }
        </Box>
    );
}

export default TasksBox;
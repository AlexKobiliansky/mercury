import React, {useCallback, useEffect, useState} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import TasksList from "./TasksList/TasksList";
import { DragDropContext } from "react-beautiful-dnd";

//styles
import s from './Workflow.module.sass'




function Workflow(props) {

    console.log('rerendered');

    let state = [
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

    let [tasks, setTasks] = useState(state);

    // let toDoTasks = tasks.filter(item => !item.progressStatus && !item.doneStatus);
    // let inProgressTasks = tasks.filter(item => item.progressStatus && !item.doneStatus);
    // let completedTasks = tasks.filter(item => item.doneStatus)

    let [toDoTasks, setToDoTasks] = useState(tasks.filter(item => !item.progressStatus && !item.doneStatus));
    let [inProgressTasks, setInProgressTasks] = useState(tasks.filter(item => item.progressStatus && !item.doneStatus));
    let [completedTasks, setCompletedTasks] = useState(tasks.filter(item => item.doneStatus));

    let onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let startList;
        let finishList;

        switch (source.droppableId) {
            case "1": startList = toDoTasks;
                break;
            case "2": startList = inProgressTasks;
                break;
            case "3": startList = completedTasks;
                break;
        }

        let dragableItem = startList.find(item => item.id === Number(draggableId));

        if (source.droppableId === destination.droppableId) {
            startList.splice(source.index, 1)
            startList.splice(destination.index, 0, dragableItem);
        } else {

            startList.splice(source.index, 1)
            switch (destination.droppableId) {
                case "1": {
                    finishList = toDoTasks;
                    dragableItem.doneStatus = 0;
                    dragableItem.progressStatus = 1;
                    finishList.splice(destination.index, 0, dragableItem);
                    setToDoTasks(finishList)
                }
                break;
                case "2": {
                    finishList = inProgressTasks;
                    dragableItem.doneStatus = 0;
                    dragableItem.progressStatus = 1;
                    finishList.splice(destination.index, 0, dragableItem);
                    setInProgressTasks(finishList);
                }
                break;
                case "3": {
                    finishList = completedTasks;
                    dragableItem.doneStatus = 1;
                    finishList.splice(destination.index, 0, dragableItem);
                    setCompletedTasks(finishList);
                }
            }

            setTasks([...tasks]);

        }
    }


    return (

        <div className={s.workflow}>
            <DragDropContext onDragEnd={onDragEnd}>
                <TasksList title='To Do' tasks={toDoTasks} listId="1"/>
                <TasksList title='In Progress' tasks={inProgressTasks} listId="2"/>
                <TasksList title='Completed' tasks={completedTasks} listId="3"/>
            </DragDropContext>

        </div>


    );
}

export default withAuthRedirect(Workflow);
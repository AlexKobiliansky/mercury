import React, {useEffect, useState} from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {changeTaskStatus} from '../../redux/actions/tasks';
import TasksList from './TasksList/TasksList';
//styles
import s from './Workflow.module.sass'

function Workflow({tasksList, changeTaskStatus}) {

    let [tasks, setTasks] = useState(tasksList);

    let [toDoTasks, setToDoTasks] = useState(tasks.filter(item => !item.progressStatus && !item.doneStatus));
    let [inProgressTasks, setInProgressTasks] = useState(tasks.filter(item => item.progressStatus && !item.doneStatus));
    let [completedTasks, setCompletedTasks] = useState(tasks.filter(item => item.doneStatus));

    let splitToLists = () => {

        setToDoTasks(tasksList.filter(item => !item.progressStatus && !item.doneStatus));
        setInProgressTasks(tasksList.filter(item => item.progressStatus && !item.doneStatus));
        setCompletedTasks(tasksList.filter(item => item.doneStatus));
        setTasks([...tasksList]);
    }

    useEffect(() => {
        splitToLists();
    }, [tasksList]);

    let onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;

        let startList;
        let finishList;
        let prevItem;
        let prevItemIndex;

        switch (source.droppableId) {
            case "1": startList = toDoTasks;
                break;
            case "2": startList = inProgressTasks;
                break;
            case "3": startList = completedTasks;
                break;
            default: return;
        }

        switch (destination.droppableId) {
            case "1":
                finishList = toDoTasks;
                break;
            case "2":
                finishList = inProgressTasks;
                break;
            case "3":
                finishList = completedTasks;
                break;
            default: return;
        }

        let dragableItem = startList.find(item => item.id === Number(draggableId));

        if (destination.droppableId === source.droppableId) {
            prevItemIndex = destination.index > source.index ? destination.index : destination.index - 1;
            prevItem = finishList[prevItemIndex];
        } else {
            prevItem = finishList[destination.index - 1];
        }

        let prevId = prevItem ? prevItem.id : null;
        changeTaskStatus(Number(draggableId), prevId, Number(destination.droppableId));

        startList.splice(source.index, 1)
        finishList.splice(destination.index, 0, dragableItem);
    }

    return (
        <div className={s.workflow}>
            <DragDropContext onDragEnd={onDragEnd}>
                <TasksList
                    title='To Do'
                    tasks={toDoTasks}
                    listId="1" />
                <TasksList
                    title='In Progress'
                    tasks={inProgressTasks}
                    listId="2" />
                <TasksList
                    title='Completed'
                    tasks={completedTasks}
                    listId="3" />
            </DragDropContext>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasksList: state.tasks.tasks,
    }
}

const mapDispatchToProps = {
    changeTaskStatus
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Workflow));
import React, {useEffect, useState} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import TasksList from './TasksList/TasksList';
import { DragDropContext } from 'react-beautiful-dnd';

//styles
import s from './Workflow.module.sass'
import {connect} from 'react-redux';


function Workflow({tasksList}) {
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
        splitToLists(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasksList]);

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
            default: return;
        }

        let dragableItem = startList.find(item => item.id === Number(draggableId));

        if (source.droppableId === destination.droppableId) {
            startList.splice(source.index, 1)
            startList.splice(destination.index, 0, dragableItem);
        } else {

            startList.splice(source.index, 1)
            switch (destination.droppableId) {
                case "1":
                    finishList = toDoTasks;
                    dragableItem.doneStatus = 0;
                    dragableItem.progressStatus = 0;
                    finishList.splice(destination.index, 0, dragableItem);
                    setToDoTasks(finishList)
                    break;
                case "2":
                    finishList = inProgressTasks;
                    dragableItem.doneStatus = 0;
                    dragableItem.progressStatus = 1;
                    finishList.splice(destination.index, 0, dragableItem);
                    setInProgressTasks(finishList);
                    break;
                case "3":
                    finishList = completedTasks;
                    dragableItem.doneStatus = 1;
                    dragableItem.progressStatus = 0;
                    finishList.splice(destination.index, 0, dragableItem);
                    setCompletedTasks(finishList);
                    break;
                default: return;
            }
            setTasks([...tasks]);
        }
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
        tasksList: state.tasks.tasks
    }
}

export default withAuthRedirect(connect(mapStateToProps, null)(Workflow));
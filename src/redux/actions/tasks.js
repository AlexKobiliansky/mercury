import {DELETE_TASK, SET_TASK_COMPLETE, SET_TASK_IN_PROGRESS, SET_TASK_TODO} from '../types';

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});

export const setTaskToDo = (id, prevId=null) => ({
    type: SET_TASK_TODO,
    payload: {
        id,
        prevId
    }
});

export const setTaskInProgress = (id) => ({
    type: SET_TASK_IN_PROGRESS,
    payload: id
});

export const setTaskComplete = (id) => ({
    type: SET_TASK_COMPLETE,
    payload: id
});

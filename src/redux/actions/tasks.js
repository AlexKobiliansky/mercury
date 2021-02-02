import {DELETE_TASK, SET_TASK_COMPLETE, SET_TASK_IN_PROGRESS, SET_TASK_TODO, SET_DRAG_ACTION} from '../types';

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});

export const setTaskToDo = (id) => ({
    type: SET_TASK_TODO,
    payload: id
});

export const setTaskInProgress = (id) => ({
    type: SET_TASK_IN_PROGRESS,
    payload: id
});

export const setTaskComplete = (id) => ({
    type: SET_TASK_COMPLETE,
    payload: id
});

export const setDragAction = (value) => ({
    type: SET_DRAG_ACTION,
    payload: value
});

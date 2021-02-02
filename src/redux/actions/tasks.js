import {DELETE_TASK} from '../types';

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});
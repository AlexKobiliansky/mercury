import {CHANGE_TASK_STATUS, DELETE_TASK} from '../types';

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});

export const changeTaskStatus = (id, prevId=null, listId=null) => ({
   type: CHANGE_TASK_STATUS,
   payload: {
       id,
       prevId,
       listId
   }
});

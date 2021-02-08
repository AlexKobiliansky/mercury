import {SORT_USERS,DELETE_USER} from '../types';


export const sortUsers = (sorting) => ({
    type: SORT_USERS,
    payload: {
        sorting: sorting
    }
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id
});
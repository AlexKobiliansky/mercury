import {SORT_USERS} from '../types';
import {DELETE_USER} from '../types';

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
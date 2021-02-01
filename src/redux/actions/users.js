import {SORT_USERS} from '../types';

export const sortUsers = (sorting) => ({
    type: SORT_USERS,
    payload: {
        sorting: sorting
    }
});
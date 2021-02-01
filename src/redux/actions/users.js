import {SORT_USERS} from '../types';

export const sortUsers = (status) => ({
    type: SORT_USERS,
    payload: {
        status: status
    }
});
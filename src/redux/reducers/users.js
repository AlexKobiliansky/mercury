import {SORT_USERS} from '../types';

const initialState = {
    sorting: ''
}

const users = (state=initialState, action) => {
    switch (action.type) {
        case SORT_USERS:
            return {
                ...state,
                sorting: action.payload.sorting
            };
        default: return state;
    }
}

export default users;
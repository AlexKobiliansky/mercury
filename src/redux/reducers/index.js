import {combineReducers} from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
    users: usersReducer,
});

// const rootReducer = (state={}, action) => {
//     switch (action.type) {
//         case 'SORT_STATUS':
//             return {status: action.payload.status};
//         default: return state;
//     }
// }

export default rootReducer;
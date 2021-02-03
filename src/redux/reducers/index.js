import {combineReducers} from 'redux';
import usersReducer from './users';
import tasksReducer from './tasks';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    sidebar: sidebarReducer
});

export default rootReducer;
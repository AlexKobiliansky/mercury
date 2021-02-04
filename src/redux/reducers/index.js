import {combineReducers} from 'redux';
import usersReducer from './users';
import tasksReducer from './tasks';
import sidebarReducer from './sidebar';
import salesChartReducer from './salesChart';

const rootReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    sidebar: sidebarReducer,
    salesChart: salesChartReducer
});

export default rootReducer;
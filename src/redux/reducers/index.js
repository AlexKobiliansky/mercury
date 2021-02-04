import {combineReducers} from 'redux';
import usersReducer from './users';
import tasksReducer from './tasks';
import sidebarReducer from './sidebar';
import salesChartReducer from './salesChart';
import reportsChartReducer from './reportsChart';

const rootReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    sidebar: sidebarReducer,
    salesChart: salesChartReducer,
    reportsChart: reportsChartReducer
});

export default rootReducer;
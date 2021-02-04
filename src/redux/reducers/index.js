import {combineReducers} from 'redux';
import usersReducer from './users';
import tasksReducer from './tasks';
import sidebarReducer from './sidebar';
import salesChartReducer from './salesChart';
import reportsChartReducer from './reportsChart';
import statisticsReducer from './statistics';

const rootReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    sidebar: sidebarReducer,
    salesChart: salesChartReducer,
    reportsChart: reportsChartReducer,
    stats: statisticsReducer,
});

export default rootReducer;
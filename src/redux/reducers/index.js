import {combineReducers} from 'redux';

import reportsChartReducer from './reportsChart';
import salesChartReducer from './salesChart';
import sidebarReducer from './sidebar';
import statisticsReducer from './statistics';
import tasksReducer from './tasks';
import usersReducer from './users';

const rootReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    sidebar: sidebarReducer,
    salesChart: salesChartReducer,
    reportsChart: reportsChartReducer,
    stats: statisticsReducer,
});

export default rootReducer;
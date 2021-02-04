import {CHANGE_USERS_CHART} from '../types';

export const changeUsersChart = (period) => ({
    type: CHANGE_USERS_CHART,
    payload: period
});
import {CHANGE_REPORTS_CHART} from '../types';

export const changeReportsChart = (period) => ({
    type: CHANGE_REPORTS_CHART,
    payload: period
});
import {CHANGE_SALES_CHART} from '../types';

export const changeSalesChart = (period) => ({
    type: CHANGE_SALES_CHART,
    payload: period
});
import {CHANGE_REPORTS_CHART} from '../types';
import {LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY} from '../../constants/charts/selects';

const initialState = {
    data: {
        [LAST_YEAR]: [0, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
        [LAST_SIX_MONTH]: [3400, 3320, 1400, 2700, 3700, 1620, 2670, 1433, 2200, 3310, 3150, 2220],
        [LAST_MONTH]: [100, 150, 225, 450, 500, 711, 670, 433, 301, 290, 150, 220],
        [LAST_WEEK]: [123, 444, 45, 355, 700, 520, 1670, 433, 500, 610, 350, 220],
        [YESTERDAY]: [111, 222, 1304, 700, 5000, 620, 3740, 2800, 3000, 1500, 1000, 2000],
    },
    period: LAST_YEAR
}

const reportsChart = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_REPORTS_CHART:
            return {
                ...state,
                period: action.payload
            };
        default: return state;
    }
}

export default reportsChart;
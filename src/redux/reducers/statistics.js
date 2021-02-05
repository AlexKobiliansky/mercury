import {CHANGE_USERS_CHART} from '../types';
import {LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY} from '../../constants/charts/charts';

const initialState = {
    data: {
        [LAST_YEAR]: {
            data: [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
            views: 13230,
            directSales: 5000,
            channelSales: 3563,
            otherSales: 1620
        },

        [LAST_SIX_MONTH]: {
            data: [3400, 3320, 1400, 2700, 3700, 1620],
            views: 7503,
            directSales: 3546,
            channelSales: 2501,
            otherSales: 2200
        },

        [LAST_MONTH]: {
            data: [100, 150, 225, 450, 500, 711, 670, 433, 301, 290, 150, 220, 100, 150, 225, 450, 500, 711, 670, 433, 301, 290, 150, 220, 100, 150, 225, 450, 500, 711],
            views: 4200,
            directSales: 1500,
            channelSales: 2108,
            otherSales: 200
        },

        [LAST_WEEK]: {
            data: [123, 444, 45, 355, 700, 520, 1670],
            views: 961,
            directSales: 321,
            channelSales: 124,
            otherSales: 117
        },

        [YESTERDAY]: {
            data: [111, 222, 1304, 700, 5000, 620, 3740, 2800, 3000, 1500, 1000, 2000, 111, 222, 1304, 700, 5000, 620, 3740, 2800, 3000, 1500, 1000, 2000],
            views: 316,
            directSales: 60,
            channelSales: 24,
            otherSales: 55
}

    },
    period: LAST_YEAR
}

const statistics = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_USERS_CHART:
            return {
                ...state,
                period: action.payload
            };
        default: return state;
    }
}

export default statistics;
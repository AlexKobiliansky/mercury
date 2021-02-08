import {LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY} from '../../constants/charts/selects';
import {CHANGE_SALES_CHART} from '../types';

const initialState = {
    data: {
        [LAST_YEAR]: [
            ["Websites", 600], ["Logo", 4123], ["Social Media", 73], ["Adwords", 212], ["E-Commerce", 555]
        ],
        [LAST_SIX_MONTH]: [
            ["Websites", 300], ["Logo", 421], ["Social Media", 71], ["Adwords", 90], ["E-Commerce", 555]
        ],
        [LAST_MONTH]: [
            ["Websites", 255], ["Logo", 43], ["Social Media", 25], ["Adwords", 12], ["E-Commerce", 12]
        ],
        [LAST_WEEK]: [
            ["Websites", 612], ["Logo", 432], ["Social Media", 137], ["Adwords", 332], ["E-Commerce", 25]
        ],
        [YESTERDAY]: [
            ["Websites", 16], ["Logo", 42], ["Social Media", 70], ["Adwords", 20], ["E-Commerce", 125]
        ]
    },
    period: LAST_YEAR
}

const salesChart = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_SALES_CHART:
            return {
                ...state,
                period: action.payload
            };
        default: return state;
    }
}

export default salesChart;
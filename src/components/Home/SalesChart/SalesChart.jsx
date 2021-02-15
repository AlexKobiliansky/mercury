import React, {useEffect, useState} from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';

import chartConfig from '../../../config/SalesChart.config';
import {numberWithCommas} from '../../../utils';

function SalesChart({data, period}) {
    let [chartData, setChartData] = useState(chartConfig);

    useEffect(() => {
        setChartData({
            title: {'text': totalSalesCount(data[period])},
            series: {'data': data[period]},
        }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [period]);

    let totalSalesCount = (arr) => {
        return numberWithCommas(arr.reduce((sum, current) => sum + current[1], 0));
     }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        period: state.salesChart.period,
        data: state.salesChart.data
    }
}

export default connect(mapStateToProps)(SalesChart);
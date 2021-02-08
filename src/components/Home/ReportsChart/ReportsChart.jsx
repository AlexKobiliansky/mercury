import React, {useEffect, useState} from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';

import chartConfig from '../../../config/ReportChart.config';


function ReportsChart({period, data}) {
    let [chartData, setChartData] = useState(chartConfig);

    useEffect(() => {
        setChartData({
            series: [
                { data: data[period]}
            ]
        });
    }, [period]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        period: state.reportsChart.period,
        data: state.reportsChart.data
    }
}

export default connect(mapStateToProps)(ReportsChart);



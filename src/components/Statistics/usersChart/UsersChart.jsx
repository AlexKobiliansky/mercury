import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import chartConfig from '../../../config/ActiveUsersChart.config';
import {connect} from 'react-redux';

function UsersChart({data, period}) {
    let [chartData, setChartData] = useState(chartConfig);

    useEffect(() => {
        setChartData({
            series: [
                { data: data[period]}
            ]
        }); //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [period]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        period: state.stats.period,
        data: state.stats.data
    }
}

export default connect(mapStateToProps)(UsersChart);
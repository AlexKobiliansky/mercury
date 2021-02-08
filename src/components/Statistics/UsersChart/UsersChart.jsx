import React, {useEffect, useState} from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';

import chartConfig from '../../../config/ActiveUsersChart.config';

function UsersChart({data, period}) {
    let [chartData, setChartData] = useState(chartConfig);

    useEffect(() => {
        setChartData({
            // series: [
            //     { data: data[period]}
            // ]
            //TODO: realize via spread operator 
            series: [{
                name: 'Total sales',
                data: data[period].data,
                color: {
                    linearGradient: [0, 0, 1000, 0],
                    stops: [
                        [0, '#5f80f7'],
                        [0.5, '#a95fbb'],
                        [1, '#fb3c79']
                    ]
                }
            }]
        });
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
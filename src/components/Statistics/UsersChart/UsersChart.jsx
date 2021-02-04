import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import chartConfig from '../../../config/ActiveUsersChart.config';
import {connect} from 'react-redux';

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
                data: data[period],
                color: {
                    linearGradient: [0, 0, 1000, 0],
                    stops: [
                        [0, '#5f80f7'],
                        [0.5, '#a95fbb'],
                        [1, '#fb3c79']
                    ]
                }
            }]
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
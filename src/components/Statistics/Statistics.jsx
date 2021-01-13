import React, {useState} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";
import ActiveUsersChartConfig from "../../config/ActiveUsersChart.config";

//styles
import hs from '../Home/Home.module.sass'
import Box from "../ui/atoms/Box/Box";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Statistics(props) {

    let activeUsersData = {
        'Last Year': [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
        'Last 6 month': [3400, 3320, 1400, 2700, 3700, 1620, 2670, 1433, 2200, 3310, 3150, 2220],
        'Last Month': [100, 150, 225, 450, 500, 711, 670, 433, 301, 290, 150, 220],
        'Last Week': [123, 444, 45, 355, 700, 520, 1670, 433, 500, 610, 350, 220],
        'Yesterday': [111, 222, 1304, 700, 5000, 620, 3740, 2800, 3000, 1500, 1000, 2000],
    };

    let activeUsersDataSelect = [];
    for (let item in activeUsersData) {
        activeUsersDataSelect.push(item)
    };
    ActiveUsersChartConfig.series[0].data = activeUsersData["Last Year"];

    let [activeUsersChartData, setactiveUsersChartData] = useState(ActiveUsersChartConfig);

    let changeActiveUsersSelect = (value) => {
        setactiveUsersChartData({
            series: {'data': activeUsersData[value]},
        });
    }


    return (
        <div>
            <BoxHeader customClass={hs.marginHeader}>
                <h1>Lorem ipsum Stats</h1>
                <Select
                    data={activeUsersDataSelect}
                    changeOption={changeActiveUsersSelect}
                />
            </BoxHeader>

            <div className={hs.homeTop}>
                <Box>Some statistics will be there</Box>

                <Box customClass={hs.boxPadding}>
                    <BoxHeader>
                        <h2>Active Users</h2>
                    </BoxHeader>

                    <HighchartsReact
                        highcharts={Highcharts}
                        options={activeUsersChartData}
                    />
                </Box>
            </div>


        </div>



    );
}

export default withAuthRedirect(Statistics);
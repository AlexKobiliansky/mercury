import React, {useState} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Box from "../ui/atoms/Box/Box";
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import MessagesBox from "./MessagesBox/MessagesBox";
import TasksBox from "./TasksBox/TasksBox";
import ActivityBox from "./ActivityBox/ActivityBox";
//config
import SalesChartConfig from "../../config/SalesChart.config";
import ReportChartConfig from "../../config/ReportChart.config";
//styles
import s from './Home.module.sass';
import SalesChart from './SalesChart/SalesChart';
import {LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY} from '../../constants/charts/charts';
import {connect} from 'react-redux';
import {sortUsers} from '../../redux/actions/users';
import {changeSalesChart} from '../../redux/actions/salesChart';

const selectData = {
    list: [LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY],
    label: 'Period'
};

function Home({changeSalesChart}) {



    let ReportsData = {
        'Last Year': [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
        'Last 6 month': [3400, 3320, 1400, 2700, 3700, 1620, 2670, 1433, 2200, 3310, 3150, 2220],
        'Last Month': [100, 150, 225, 450, 500, 711, 670, 433, 301, 290, 150, 220],
        'Last Week': [123, 444, 45, 355, 700, 520, 1670, 433, 500, 610, 350, 220],
        'Yesterday': [111, 222, 1304, 700, 5000, 620, 3740, 2800, 3000, 1500, 1000, 2000],
    };



    // let ReportsDataSelect = [];
    // for (let item in ReportsData) {
    //     ReportsDataSelect.push(item)
    // }

    // ReportChartConfig.series[0].data = ReportsData["Last Year"]

    // let [reportsChartData, setReportsChartData] = useState(ReportChartConfig);

    let onChangeSalesChart = (e) => {
        changeSalesChart(e.value)
    //
    //     console.log(e.value);
    //
    //     setSalesChartData({
    //         // title: {'text': totalSalesCount(SalesData[value]).toLocaleString('en-US')},
    //         series: {'data': SalesData[value]},
    //     });
    //
    //     totalSalesCount(SalesData[value]);
    }

    // let changeReportSelect = (value) => {
    //     setReportsChartData({
    //         series: {'data': ReportsData[value]},
    //     });
    // }

    const name = JSON.parse(localStorage.getItem('username'));

    return (
        <div>
            <h1>Hello {name}!</h1>
            <div className={s.homeTop}>
                <Box customClass={s.boxPadding}>
                    <BoxHeader>
                        <h2>Your sales</h2>
                        <Select
                            data={selectData}
                            changeOption={onChangeSalesChart}
                        />
                    </BoxHeader>
                    <SalesChart />
                </Box>

                {/*<Box customClass={s.boxPadding}>*/}
                {/*    <BoxHeader>*/}
                {/*        <h2>Report</h2>*/}
                {/*        <Select*/}
                {/*            data={ReportsDataSelect}*/}
                {/*            changeOption={changeReportSelect}*/}
                {/*        />*/}
                {/*    </BoxHeader>*/}
                {/*    <HighchartsReact*/}
                {/*        highcharts={Highcharts}*/}
                {/*        options={reportsChartData}*/}
                {/*    />*/}
                {/*</Box>*/}
            </div>

            <div className={s.homeBottom}>
                <TasksBox />
                <MessagesBox />
                <ActivityBox />
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         sorting: state.users.sorting,
//         usersList: state.users.users
//     }
// }

const mapDispatchToProps = {
    changeSalesChart
}

export default withAuthRedirect(connect(null, mapDispatchToProps)(Home));
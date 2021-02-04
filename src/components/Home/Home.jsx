import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Box from "../ui/atoms/Box/Box";
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";
import MessagesBox from "./MessagesBox/MessagesBox";
import TasksBox from "./TasksBox/TasksBox";
import ActivityBox from "./ActivityBox/ActivityBox";
import s from './Home.module.sass';
import SalesChart from './SalesChart/SalesChart';
import {LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY} from '../../constants/charts/charts';
import {connect} from 'react-redux';
import {changeSalesChart} from '../../redux/actions/salesChart';
import ReportsChart from './ReportsChart/ReportsChart';
import {changeReportsChart} from '../../redux/actions/reportsChart';

const selectData = {
    list: [LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY],
    label: 'Period'
};

function Home({changeSalesChart, changeReportsChart, salesPeriod, reportsPeriod}) {

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
                            changeOption={(e) => changeSalesChart(e.value)}
                            selectedOption={salesPeriod}
                        />
                    </BoxHeader>
                    <SalesChart />
                </Box>

                <Box customClass={s.boxPadding}>
                    <BoxHeader>
                        <h2>Report</h2>
                        <Select
                            data={selectData}
                            changeOption={(e) => changeReportsChart(e.value)}
                            selectedOption={reportsPeriod}
                        />
                    </BoxHeader>
                    <ReportsChart />
                </Box>
            </div>

            <div className={s.homeBottom}>
                <TasksBox />
                <MessagesBox />
                <ActivityBox />
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        salesPeriod: state.salesChart.period,
        reportsPeriod: state.reportsChart.period
    }
}


const mapDispatchToProps = {
    changeSalesChart,
    changeReportsChart
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Home));
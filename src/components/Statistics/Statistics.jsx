import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";
import Box from "../ui/atoms/Box/Box";
import TotalStats from "./TotalStats/TotalStats";
import Circle from "./Circle/Circle";
import hs from '../Home/Home.module.sass';
import s from './Statistics.module.sass';
import statsImg1 from 'img/stats-img-1.png';
import statsImg2 from 'img/stats-img-2.png';
import {LAST_MONTH, LAST_SIX_MONTH, LAST_WEEK, LAST_YEAR, YESTERDAY} from '../../constants/charts/charts';
import {connect} from 'react-redux';
import {changeUsersChart} from '../../redux/actions/statistics';
import UsersChart from './UsersChart/UsersChart';

const selectData = {
    list: [LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY],
    label: 'Period'
};

function Statistics({changeUsersChart, period, data}) {

    let {directSales, channelSales, otherSales, views} = data[period];

    let sales = directSales + channelSales + otherSales;

    let circlesData = {
        'first data' : {
            title: 'Direct Sales',
            value: directSales,
            percentage: Math.round((directSales/sales) * 100)
        },
        'second data' : {
            title: 'Channel Sales',
            value: channelSales,
            percentage: Math.round((channelSales/sales) * 100)
        },
        'third data' : {
            title: 'Other Sales',
            value: otherSales,
            percentage: Math.round((otherSales/sales) * 100)
        }
    }


    return (
        <div>
            <BoxHeader customClass={hs.marginHeader}>
                <h1>Lorem ipsum Stats</h1>
                <Select
                    data={selectData}
                    changeOption={(e) => changeUsersChart(e.value)}
                    selectedOption={period}
                />
            </BoxHeader>

            <div className={hs.homeTop}>
                <Box>
                    <TotalStats
                        value={sales}
                        title='Sales'
                        img={statsImg1}/>
                    <TotalStats
                        value={views}
                        title='Views'
                        img={statsImg2}/>
                </Box>

                <Box customClass={hs.boxPadding}>
                    <BoxHeader>
                        <h2>Active Users</h2>
                    </BoxHeader>

                    <UsersChart />
                </Box>
            </div>

            <Box>
                <BoxHeader customClass={`${hs.paddingHeader} ${hs.noBorderHeader}`}>
                    <h2>Total sales</h2>
                </BoxHeader>

                <div className={s.circlesWrap}>
                    <Circle data={circlesData['first data']} color='#5484ff'/>
                    <Circle data={circlesData['second data']} color='#aa5fb9'/>
                    <Circle data={circlesData['third data']} color='#f83c7b'/>
                </div>
            </Box>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        period: state.stats.period,
        data: state.stats.data
    }
}

const mapDispatchToProps = {
    changeUsersChart,
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Statistics));
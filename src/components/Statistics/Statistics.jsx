import React, {useState} from 'react';
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
import UsersChart from './usersChart/UsersChart';

const selectData = {
    list: [LAST_YEAR, LAST_SIX_MONTH, LAST_MONTH, LAST_WEEK, YESTERDAY],
    label: 'Period'
};

function Statistics({changeUsersChart, period}) {

    let circlesData = {
        'first data' : {
            id: 1,
            title: 'Direct Sales',
            value: 2300,
            percentage: 45
        },
        'second data' : {
            id: 2,
            title: 'Channel Sales',
            value: 980,
            percentage: 20
        },
        'third data' : {
            id: 1,
            title: 'Channel Sales',
            value: 1250,
            percentage: 25
        }
    }

    let sales = 1560;
    let views = 3230;

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
    }
}

const mapDispatchToProps = {
    changeUsersChart,
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Statistics));
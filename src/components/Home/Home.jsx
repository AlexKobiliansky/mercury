import React, {useState} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Box from "../ui/atoms/Box/Box";
import s from './Home.module.sass'
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

//config
import SalesChart from "../../config/SalesChart.config";
import ReportChart from "../../config/ReportChart.config";

function Home(props) {

    let forSalesSelect = ['Last Year', 'Last 6 month', 'Last Month', 'Last Week', 'Yesterday'];
    let forReportSelect = ['Last Year', 'Last 6 month', 'Last Month', 'Last Week', 'Yesterday'];
    let totalSales = 1560;

    let [title, setTitle] = useState('200');

    const name = JSON.parse(localStorage.getItem('username'))

    return (
        <div className={s.home}>
            <h1>Hello {name}!</h1>
            <div className={s.homeTop}>
                <Box>
                    <div className={s.boxPadding}>
                        <BoxHeader>
                            <h2>Your sales</h2>
                            <Select data={forSalesSelect}/>
                        </BoxHeader>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={SalesChart}
                        />
                    </div>
                </Box>

                <Box>
                    <div className={s.boxPadding}>
                        <BoxHeader>
                            <h2>Report</h2>
                            <Select data={forReportSelect}/>
                        </BoxHeader>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={ReportChart}
                            oneToOne={true}
                        />
                    </div>
                </Box>

                <span>change title</span>
            </div>
        </div>
    );
}

export default withAuthRedirect(Home);
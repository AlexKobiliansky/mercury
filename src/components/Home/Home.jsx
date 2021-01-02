import React, {useState} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Box from "../ui/atoms/Box/Box";
import s from './Home.module.sass'
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

//config
import SalesChartConfig from "../../config/SalesChart.config";
import ReportChartConfig from "../../config/ReportChart.config";

function Home(props) {

    let SalesData = {
        'Last Year': [
            ["Websites", 600], ["Logo", 4123], ["Social Media", 73], ["Adwords", 212], ["E-Commerce", 555]
        ],
        'Last 6 month': [
            ["Websites", 300], ["Logo", 421], ["Social Media", 71], ["Adwords", 90], ["E-Commerce", 555]
        ],
        'Last Month': [
            ["Websites", 255], ["Logo", 43], ["Social Media", 25], ["Adwords", 12], ["E-Commerce", 12]
        ],
        'Last Week': [
            ["Websites", 612], ["Logo", 432], ["Social Media", 137], ["Adwords", 332], ["E-Commerce", 25]
        ],
        'Yesterday': [
            ["Websites", 16], ["Logo", 42], ["Social Media", 70], ["Adwords", 20], ["E-Commerce", 125]
        ]
    };
    
    let ReportsData = {
        'Last Year': [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
        'Last 6 month': [3400, 3320, 1400, 2700, 3700, 1620, 2670, 1433, 2200, 3310, 3150, 2220],
        'Last Month': [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
        'Last Week': [123, 444, 45, 355, 700, 520, 1670, 433, 500, 610, 350, 220],
        'Yesterday': [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220],
    };

    let SalesDataSelect = [];
    for (let item in SalesData) {
        SalesDataSelect.push(item)
    }

    let ReportsDataSelect = [];
    for (let item in ReportsData) {
        ReportsDataSelect.push(item)
    }

    let totalSalesCount = (arr) => {
        let sum = 0;
        arr.map(value => {
            return sum = sum + value[1];
        })

        return sum;
    }

    let [salesChartData, setSalesChartData] = useState(SalesChartConfig);
    let [reportsChartData, setReportsChartData] = useState(ReportChartConfig);

    let changeSalesSelect = (value) => {
        setSalesChartData({
            title: {'text': totalSalesCount(SalesData[value]).toLocaleString('en-US')},
            series: {'data': SalesData[value]},
        });

        totalSalesCount(SalesData[value]);
    }

    let changeReportSelect = (value) => {
        setReportsChartData({
            series: {'data': ReportsData[value]},
        });
    }

    const name = JSON.parse(localStorage.getItem('username'));

    return (
        <div className={s.home}>
            <h1>Hello {name}!</h1>
            <div className={s.homeTop}>
                <Box>
                    <div className={s.boxPadding}>
                        <BoxHeader>
                            <h2>Your sales</h2>
                            <Select
                                data={SalesDataSelect}
                                changeOption = {changeSalesSelect}
                            />
                        </BoxHeader>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={salesChartData}
                        />
                    </div>
                </Box>

                <Box>
                    <div className={s.boxPadding}>
                        <BoxHeader>
                            <h2>Report</h2>
                            <Select
                                data={ReportsDataSelect}
                                changeOption = {changeReportSelect}
                            />
                        </BoxHeader>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={reportsChartData}
                        />
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default withAuthRedirect(Home);
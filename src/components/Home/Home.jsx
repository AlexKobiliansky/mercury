import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Box from "../ui/atoms/Box/Box";
import s from './Home.module.sass'
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import Select from "../ui/atoms/Select/Select";
import ReactHighcharts from 'react-highcharts';

//config
import SalesChart from "../../config/SalesChart.config";
import ReportChart from "../../config/ReportChart.config";


const name = JSON.parse(localStorage.getItem('username'))

function Home(props) {

    let forSalesSelect = ['Last Year', 'Last 6 month', 'Last Month', 'Last Week', 'Yesterday'];
    let forReportSelect = ['Last Year', 'Last 6 month', 'Last Month', 'Last Week', 'Yesterday'];

    let chart2 = React.createRef();

    let rerenderBla = () => {
        console.log(chart2)
    }

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
                        <ReactHighcharts config = {SalesChart}></ReactHighcharts>
                    </div>
                </Box>

                <Box>
                    <div className={s.boxPadding}>
                        <BoxHeader>
                            <h2>Report</h2>
                            <Select data={forReportSelect}/>
                        </BoxHeader>
                        <ReactHighcharts config = {ReportChart} ref={chart2}></ReactHighcharts>
                    </div>
                </Box>

                <span onClick={rerenderBla}>update chart</span>
            </div>
        </div>
    );
}

export default withAuthRedirect(Home);
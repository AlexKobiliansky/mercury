import React, {useState} from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PageContent from './PageContent/PageContent';
import classNames from 'classnames';

import s from './DefaultLayout.module.sass';
import Highcharts from "highcharts";

function DefaultLayout(props) {
    const [hiddenSidebar, setHiddenSidebar] = useState(true);

    const toggleSidebar = ()=> {
        setHiddenSidebar(!hiddenSidebar);

        for (let i = 0; i < Highcharts.charts.length; i++) {
            if (Highcharts.charts[i] !== undefined) {
                setTimeout(function(){
                    Highcharts.charts[i].reflow();
                }, 250)
            } else {
                Highcharts.charts.splice(i, 1)
            }
        }

        // console.log(Highcharts.charts)
    }

    return (
        <div className={s.page}>
            <Sidebar hiddenSidebar={hiddenSidebar} />
            <div className={classNames(s.pageBody, {[s.hiddenSidebar]: hiddenSidebar})}>
                <Header toggleSidebar={toggleSidebar}
                        hiddenSidebar={hiddenSidebar}/>
                <PageContent />
            </div>
        </div>
    );
}

export default DefaultLayout;
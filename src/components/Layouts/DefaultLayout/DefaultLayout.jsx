import React, {useState} from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PageContent from './PageContent/PageContent';
import classNames from 'classnames';
import {connect} from 'react-redux';

import s from './DefaultLayout.module.sass';
import Highcharts from "highcharts";

function DefaultLayout({openedSidebar}) {

    // const toggleSidebar = ()=> {
    //     setHiddenSidebar(!hiddenSidebar);
    //
    //     for (let i = 0; i < Highcharts.charts.length; i++) {
    //         if (Highcharts.charts[i] !== undefined) {
    //             setTimeout(function(){
    //                 Highcharts.charts[i].reflow();
    //             }, 250)
    //         } else {
    //             Highcharts.charts.splice(i, 1)
    //         }
    //     }
    //
    //     // console.log(Highcharts.charts)
    // }

    return (
        <div className={s.page}>
            <Sidebar />
            <div className={classNames(s.pageBody, {[s.hiddenSidebar]: !openedSidebar})}>
                <Header />
                <PageContent />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        openedSidebar: state.sidebar.openedSidebar,
    }
}

export default connect(mapStateToProps)(DefaultLayout);
import React from 'react';
import classNames from 'classnames';
import s from './Hamburger.module.sass';
import {connect} from 'react-redux';
import {toggleSidebar} from '../../../../../redux/actions/sidebar';
import Highcharts from "highcharts";

function Hamburger({openedSidebar, toggleSidebar}) {


    let toggleSidebarHandler = () => {
        toggleSidebar();
        for (let i = 0; i < Highcharts.charts.length; i++) {
            if (typeof Highcharts.charts[i] != 'undefined') {
                setTimeout(function () {
                    Highcharts.charts[i].reflow();
                }, 250);
            }
        }
    }

    return (
        <div className={classNames(s.hamburger, {[s.active]: openedSidebar})} onClick={toggleSidebarHandler}>
            <div className={s.hamburgerInner}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        openedSidebar: state.sidebar.openedSidebar,
    }
}

const mapDispatchToProps = {
    toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
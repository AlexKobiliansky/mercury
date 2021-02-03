import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import NavItem from "./NavItem/NavItem";
import {connect} from 'react-redux';

import s from './Sidebar.module.sass'
import logo from "../../../../img/logo.png";

function Sidebar({items, openedSidebar}) {
    return (
        <div className={classNames(s.sidebar, {[s.hiddenSidebar]: !openedSidebar})}>
            <div className={s.logoWrapper}>
                <NavLink to='/' className={s.logo}>
                    <img src={logo} alt="Mercury"/>
                </NavLink>
            </div>

            <nav>
                <ul>
                    {items.map(item => <NavItem path={item.path} icon={item.icon} name={item.name} key={item.id}/>)}
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        openedSidebar: state.sidebar.openedSidebar,
        items: state.sidebar.items
    }
}

export default connect(mapStateToProps)(Sidebar);
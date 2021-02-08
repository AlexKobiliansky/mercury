import React from 'react';

import classNames from 'classnames';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import logo from "../../../../img/logo.png";
import NavItem from "./NavItem/NavItem";
import s from './Sidebar.module.sass'

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
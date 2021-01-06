import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import NavItem from "./NavItem/NavItem";

import s from './Sidebar.module.sass'
import logo from "../../../../img/logo.png";

import mnuIcon1 from "img/icons/main-mnu/mnu-icon-1.svg";
import mnuIcon2 from "img/icons/main-mnu/mnu-icon-2.svg";
import mnuIcon3 from "img/icons/main-mnu/mnu-icon-3.svg";
import mnuIcon4 from "img/icons/main-mnu/mnu-icon-4.svg";
import mnuIcon5 from "img/icons/main-mnu/mnu-icon-5.svg";
import mnuIcon6 from "img/icons/main-mnu/mnu-icon-6.svg";

function Sidebar(props) {

    let items = [
        {
            id: 1,
            path: "/",
            icon: mnuIcon1,
            name: "Home"
        },
        {
            id: 2,
            path: "/workflow",
            icon: mnuIcon2,
            name: "Workflow"
        },
        {
            id: 3,
            path: "/statistics",
            icon: mnuIcon3,
            name: "Statistics"
        },
        {
            id: 4,
            path: "/Calendar",
            icon: mnuIcon4,
            name: "Calendar"
        },
        {
            id: 5,
            path: "/users",
            icon: mnuIcon5,
            name: "Users"
        },
        {
            id: 6,
            path: "/settings",
            icon: mnuIcon6,
            name: "Settings"
        }
    ]

    return (
        <div className={classNames(s.sidebar, {[s.hiddenSidebar]: props.hiddenSidebar})}>
            <div className={s.logoWrapper}>
                <NavLink to='/' className={s.logo}><img src={logo} alt="Mercury"/></NavLink>
            </div>

            <nav>
                <ul>
                    {items.map(item => <NavItem path={item.path} icon={item.icon} name={item.name} key={item.id}/>)}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
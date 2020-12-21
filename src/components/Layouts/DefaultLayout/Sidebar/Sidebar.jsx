import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import s from './Sidebar.module.sass'

function Sidebar(props) {

    return (
        <div className={classNames(s.sidebar, {[s.hiddenSidebar]: props.hiddenSidebar})}>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/workflow">Workflow</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/calendar">Calendar</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
import React from 'react';
import {Route ,NavLink} from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Calendar from './Calendar/Calendar';
import Users from './Users/Users';
import Settings from './Settings/Settings';
import Home from './Home/Home';
import Workflow from './Workflow/Workflow';

function DefaultLayout(props) {
    return (
        <div className="page">
            <div className="sidebar">
                <nav className="mainMnu">
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
            <div className="pageBody">
                <div className="header">header</div>
                <div className="content">
                    <Route path="/" component={Home} exact/>
                    <Route path="/workflow" component={Workflow} />
                    <Route path="/statistics" component={Statistics} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/users" component={Users} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
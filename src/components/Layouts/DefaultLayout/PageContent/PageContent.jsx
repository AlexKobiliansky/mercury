import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../../Home/Home';
import Workflow from '../../../Workflow/Workflow';
import Statistics from '../../../Statistics/Statistics';
import Calendar from '../../../Calendar/Calendar';
import Users from '../../../Users/Users';
import Settings from '../../../Settings/Settings';

import s from './PageContent.module.sass';

function PageContent(props) {
    return (
        <div className={s.pageContent}>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/workflow" component={Workflow} />
                <Route path="/statistics" component={Statistics} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/users" component={Users} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </div>
    );
}

export default PageContent;
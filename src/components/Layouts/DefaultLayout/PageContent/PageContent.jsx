import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Calendar from '../../../Calendar/Calendar';
import Home from '../../../Home/Home';
import Settings from '../../../Settings/Settings';
import Statistics from '../../../Statistics/Statistics';
import Users from '../../../Users/Users';
import Workflow from '../../../Workflow/Workflow';
import s from './PageContent.module.sass';

function PageContent() {
  return (
    <div className={s.pageContent}>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/workflow" component={Workflow}/>
        <Route path="/statistics" component={Statistics}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/users" component={Users}/>
        <Route path="/settings" component={Settings}/>
      </Switch>
    </div>
  );
}

export default PageContent;
import React from 'react';
import './App.sass';
import NoAuthLayout from './components/Layouts/NoAuthLayout/NoAuthLayout';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/login" component={NoAuthLayout} exact/>
            <DefaultLayout />
        </Switch>
    </div>
  );
}

export default App;

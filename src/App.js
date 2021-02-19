import React from 'react';

import './App.sass';
import {Route, Switch} from 'react-router-dom';

import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import NoAuthLayout from './components/Layouts/NoAuthLayout/NoAuthLayout';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';

function App() {
  // const {token, login, logout, userId} = useAuth();
  // const isAuthenticated = !!token;
  return (
    // <AuthContext.Provider value={{
    //   token, login, logout, userId, isAuthenticated
    // }}>
      <div className="App">
        <Switch>
          <Route path="/login" component={NoAuthLayout} exact/>
          <DefaultLayout />
        </Switch>
      </div>
    // </AuthContext.Provider>
  );
}

export default App;

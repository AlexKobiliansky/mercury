import React from 'react';
import './App.css';
import NoAuthLayout from './components/NoAuthLayout';
import DefaultLayout from './components/DefaultLayout';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <DefaultLayout />
        <Route path="/login" component={NoAuthLayout} exact/>
    </div>
  );
}

export default App;

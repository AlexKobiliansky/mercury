import React from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import store from './redux/store';


TimeAgo.addDefaultLocale(en)

ReactDOM.render(
    <Provider store={store}>
         {/*<React.StrictMode>*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*</React.StrictMode>,*/}
    </Provider>,
  document.getElementById('root')
);


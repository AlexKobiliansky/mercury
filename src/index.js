import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

ReactDOM.render(
    <Provider store={store}>
        {/* <React.StrictMode>*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*</React.StrictMode>,*/}
    </Provider>,
  document.getElementById('root')
);


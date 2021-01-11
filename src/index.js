import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

ReactDOM.render(
  // <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);


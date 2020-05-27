import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import './index.css';

//  importing the style sheer
import App from './App';

// redux related imports
import { Provider } from "react-redux"
import { store } from "./redux/Store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
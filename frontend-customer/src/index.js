import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from "react-redux"
import store from "./redux/store"
import Account from './pages/Account';

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Account />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  
  
);


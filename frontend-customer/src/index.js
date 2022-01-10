import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./redux/store"
import Reviews from './pages/Reviews/Reviews';


ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Reviews />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  
  
);


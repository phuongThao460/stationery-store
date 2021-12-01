import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListItem from './components/ListItem';
import CheckoutCustomer from './pages/CheckoutCustomer';
import ProductList from './components/testAPI/ProductList';
import GetProduct from './components/testAPI/GetProduct';

import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    {/* <ListItem /> */}
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  
  
);


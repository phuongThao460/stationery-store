import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListItem from './components/ListItem';
import CheckoutCustomer from './pages/CheckoutCustomer';
import ProductList from './components/testAPI/ProductList';
import GetProduct from './components/testAPI/GetProduct';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GetProduct/>
  </React.StrictMode>,
  document.getElementById('root')
);


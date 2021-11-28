import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListItem from './components/ListItem';
import CheckoutCustomer from './pages/CheckoutCustomer';



ReactDOM.render(
  <React.StrictMode>
    <CheckoutCustomer />
    {/* <ListItem /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


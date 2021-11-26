import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './components/testAPI/ProductList';
import GetProduct from './components/testAPI/GetProduct';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductList/>
    <GetProduct/>
  </React.StrictMode>,
  document.getElementById('root')
);


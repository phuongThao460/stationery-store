/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import LoginForm from './pages/Account/LoginForm'
import Product from "./components/Product";
import Cart from "./pages/Cart/Cart.js";
import CheckoutCustomer from "./pages/Checkout/CheckoutCustomer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListItem from "./components/ListItem";
import Checkout from "./pages/Checkout/Checkout";
import NotificateOrder from "./pages/NotificateOrder";
import Account from "./pages/Account/Account";
//import data from './data'

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar click={() => setSideToggle(true)} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/item/:title" element={<ListItem />} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/Signup" element={<Account/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckoutCustomer" element={<CheckoutCustomer/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/notificate" element={<NotificateOrder/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

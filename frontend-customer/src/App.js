/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Product from "./components/Product";
import Cart from "./pages/Cart/Cart.js";
import CheckoutCustomer from "./pages/Checkout/CheckoutCustomer";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ListItem from "./components/ListItem";
import SubNav from "./data/SubNavbar";
import Checkout from "./pages/Checkout/Checkout";
import NotificateOrder from "./pages/NotificateOrder";
import Account from "./pages/Account";
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
          <Route path="/Login" element={<LoginForm/>}/>
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

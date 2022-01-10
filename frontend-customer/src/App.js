/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./global.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/Account/LoginForm";
import Product from "./components/Product";
import Cart from "./pages/Cart/Cart.js";
import CheckoutCustomer from "./pages/Checkout/CheckoutCustomer";
import ListItem from "./components/ListItem";
import Checkout from "./pages/Checkout/Checkout";
import NotificateOrder from "./pages/NotificateOrder";
import Account from "./pages/Account/Account";
import SidebarMenu from "./components/SidebarMenu";
import EditAccount from "./pages/Profile/MainProfile/EditAccount";
import EditAddress from "./pages/Profile/MainProfile/EditAddress";
import OrderView from "./pages/Profile/MainProfile/OrderView";
import Feedback from "./pages/Profile/MainProfile/Feedback";
import Favorites from "./pages/Profile/MainProfile/Favorites";
import Vouchers from "./pages/Profile/MainProfile/Vouchers";
import Profile from "./pages/Profile/Profile";
import Category from "./pages/Category/Category";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar click={() => setSideToggle(true)} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/item/:title" element={<ListItem />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Signup" element={<Account />} />
          <Route path="/category/:category_name" element={<Category />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckoutCustomer" element={<CheckoutCustomer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/notificate" element={<NotificateOrder />} />
          <Route path="profile/*" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

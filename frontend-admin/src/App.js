/* eslint-disable no-unused-vars */

import "./global.style";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddNewProduct from "./pages/Product/AddNewProduct";
import OrderManagerment from "./pages/Order/OrderManagerment";
import OrderDetail from "./pages/Order/OrderDetail";
import EditProduct from "./pages/Product/EditProduct";
import Customers from "./pages/Customer/Customers";
import Voucher from "./pages/Voucher/Voucher";
import AddNewVoucher from "./pages/Voucher/AddNewVoucher";
import Statistic from "./pages/Statistics/Statistic";
import Reviews from "./pages/Reviews/Reviews";
import Login from "./pages/Employee/Login";
const Contact = () => {
  return <h1>Contact</h1>;
};
function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>

          <SideMenu
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
          />
          <div className={`container ${inactive ? "inactive" : ""}`}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products/add-product" element={<AddNewProduct />} />
              <Route path="/products/edit/:id" element={<EditProduct />} />
              <Route path="/products/feedback" element={<Reviews />} />
              <Route path="/customer" element={<Customers />} />
              <Route path="/order" element={<OrderManagerment />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/voucher" element={<Voucher />} />
              <Route path="/voucher/add-voucher" element={<AddNewVoucher />} />
              <Route path="/statistics" element={<Statistic />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

/* eslint-disable no-unused-vars */

import './global.style'
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
const Contact = () => {
  return <h1>Contact</h1>;
};
function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <SideMenu
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
          />
          <div className={`container ${inactive ? "inactive" : ""}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products/add-product" element={<AddNewProduct />} />
              <Route path="/products/edit/:id" element={<EditProduct/>} />
              <Route path="/customer" element={<Customers />} />
              <Route path="/order" element={<OrderManagerment />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/voucher" element={<Voucher/>} />
              <Route path="/voucher/add-voucher" element={<AddNewVoucher/>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

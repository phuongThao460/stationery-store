/* eslint-disable no-unused-vars */

import "./global.style";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import TypeAndMaterial from './pages/Dashboard/SubMenuForm/TypeAndMaterial'
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
import Profile from "./pages/Employee/Profile";
import StaffManagement from "./pages/Employee/StaffManagement";
import AddListProducts from "./pages/Product/AddListProducts";
import AddNewStaff from "./pages/Employee/AddNewStaff";
import ViewListStatistics from './pages/Statistics/ViewListStatistics'
import Supplier from "./pages/Dashboard/SubMenuForm/Supplier";
import EditStaff from "./pages/Employee/EditStaff";
const Contact = () => {
  return <h1>Contact</h1>;
};
function App() {
  const [inactive, setInactive] = useState(false);
  const employeeInfo = JSON.parse(window.sessionStorage.getItem("employee-account"));
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {window.sessionStorage.getItem("employee-account") !== null ? (
            <>
              <SideMenu
                onCollapse={(inactive) => {
                  setInactive(inactive);
                }}
              />
              <div className={`container ${inactive ? "inactive" : ""}`}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/products/add-product"
                    element={<AddNewProduct />}
                  />
                  <Route path="/products/add-lst-product" element={<AddListProducts/>}/>
                  <Route path="/products/edit/:id" element={<EditProduct />} />
                  <Route path="/products/feedback" element={<Reviews />} />
                  <Route path="/products/type-material" element={<TypeAndMaterial/>} />
                  <Route path="/products/supplier" element={<Supplier/>} />
                  <Route path="/customer" element={<Customers />} />
                  <Route path="/order" element={<OrderManagerment />} />
                  <Route path="/order/:id" element={<OrderDetail />} />
                  <Route path="/voucher" element={<Voucher />} />
                  <Route
                    path="/voucher/add-voucher"
                    element={<AddNewVoucher />}
                  />
                  <Route path="/statistics" element={<Statistic />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/profile" element={<Profile/>} />
                  {employeeInfo.role === 0 ? <Route path="/staff" element={<StaffManagement/>} /> : null}
                  <Route path="/staff/add-new-staff" element={<AddNewStaff/>} />
                  <Route path="/staff/:id" element={<EditStaff/>} />
                  <Route path="/statistics/view-list" element={<ViewListStatistics/>} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

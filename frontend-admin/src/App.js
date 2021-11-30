/* eslint-disable no-unused-vars */
import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddNewProduct from "./pages/Product/AddNewProduct";
import OrderManagerment from "./pages/Order/OrderManagerment";
import OrderDetail from "./pages/Order/OrderDetail";
import EditProduct from "./pages/Product/EditProduct";
const Courses = () => {
  return <h1>Courses</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};
const Music = () => {
  return <h1>Music</h1>;
};
function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <SideMenu
            onCollapse={(inactive) => {
              console.log(inactive);
              setInactive(inactive);
            }}
          />
          <div className={`container ${inactive ? "inactive" : ""}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products/add-product" element={<AddNewProduct />} />
              <Route path="/products/edit/:id" element={<EditProduct/>} />
              <Route path="/customer" element={<Courses />} />
              <Route path="/customer/music" element={<Music />} />
              <Route path="/order" element={<OrderManagerment />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

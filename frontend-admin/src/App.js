/* eslint-disable no-unused-vars */
import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Material from "./components/Material";
import Color from "./components/MultipleColor";
import { Modal } from "./components/Modal";
import AddNewProduct from "./pages/AddNewProduct";
import View from "./pages/View";
import ViewProduct from "./pages/ViewProduct";
const Content = () => {
  return <h1>Content</h1>;
};
const Courses = () => {
  return <h1>Courses</h1>;
};
const AboutUs = () => {
  return <h1>AboutUs</h1>;
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
              {/* <Route path="/products/:id" element={<ViewProduct/>} /> */}
              <Route path="/customer" element={<Courses />} />
              <Route path="/customer/music" element={<Music />} />
              <Route path="/order" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

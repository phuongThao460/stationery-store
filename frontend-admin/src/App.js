/* eslint-disable no-unused-vars */
import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Material from "./components/Material";
import Color from "./components/Color";
import { Modal } from "./components/Modal";
import Product from "./pages/Product";
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
    <div className="App">
      {/* <BrowserRouter>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/courses" element={<Courses />} />
            <Route path="/content/music" element={<Music />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      <Product/>
    </div>
  );
}

export default App;

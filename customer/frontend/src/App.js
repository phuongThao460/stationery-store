/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ListItem from "./components/ListItem";
import SubNav from "./data/SubNavbar";
//import data from './data'

function App() {
  const [cartItem, setCartItem] = useState([]);
  //const { product } = data;
  return (
    <>
      <BrowserRouter>
        <Navbar countCartItem={cartItem.length} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/item/:title" element={<ListItem />} />
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="/Signup" element={<SignupForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

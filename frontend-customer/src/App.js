/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Product from "./components/Product";
import Cart from "./components/Cart";
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
  const [cartItems, setCardItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product._id);
    if (exist) {
      setCardItems(
        cartItems.map((x) =>
          x.id === product._id ? { ...exist, so_luong: exist.so_luong + 1 } : x
        )
      );
    } else {
      setCardItems([...cartItems, { ...product, so_luong: 1 }]);
    }
    // let products = [];
    // if(localStorage.getItem('products')){
    //     products = JSON.parse(localStorage.getItem('products'));
    //     //setCardItems(cartItems + JSON.parse(localStorage.getItem("products")).length)
    // }
    // products.push(product);
    // setCardItems(cartItems + 1)
    // localStorage.setItem('products', JSON.stringify(products));
  };
  //const countCartItem = JSON.parse(localStorage.getItem("products")).length;
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCardItems(cartItems.filter((x) => x.id !== product.id))
    }
    else{
      setCardItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar countCartItem={cartItems.length} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/item/:title" element={<ListItem />} />
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="/Signup" element={<SignupForm/>} />
          <Route path="/products/:id" element={<Product onAdd={onAdd}/>} />
          <Route path="/Cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

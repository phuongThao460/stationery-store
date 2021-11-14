import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import data from './data'

function App() {
  const [cartItem, setCartItem] = useState([]);
  //const { product } = data;


  return (
    <div className="App">
      <Navbar countCartItem={cartItem.length}/>
    </div>
  );
}

export default App;

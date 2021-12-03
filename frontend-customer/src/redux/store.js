import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from "./reducer/cartReducer"

import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducer/productReducer";


const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});


const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );
  export default store;
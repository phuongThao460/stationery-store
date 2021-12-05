import * as actionTypes from "../constant/CartConstant";
import axios from "axios";

export const addToCart = (id, count) => async (dispatch, getState) => {
  const { data } = await axios.post("http://localhost:8000/san_pham/", {_id: id});

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      ten_sp: data.ten_sp,
      don_gia_xuat: data.don_gia_xuat,
      mau_sac: data.mau_sac,
      count,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
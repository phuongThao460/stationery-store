import * as actionTypes from "../constant/CartConstant";
import axios from "axios";

export const addToCart = (id, count, cong_don = false) => async (dispatch, getState) => {
  const { data } = await axios.post("https://stationery-store-tmdt.herokuapp.com/san_pham/", {_id: id});

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      ten_sp: data.ten_sp,
      gia_ban_hien_tai: data.gia_ban_hien_tai,
      mau_sac: data.mau_sac,
      so_luong: data.so_luong,
      count,
      cong_don,
    },
  });

  sessionStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CART_RESET,
  });

  localStorage.removeItem("cart");
  localStorage.removeItem("total");
  localStorage.removeItem("total-1");
  localStorage.removeItem("id_voucher");
};

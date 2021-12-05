import React from "react";
import axios from "axios";

export default function GetCart() {
  let carts = [
    {
      id_san_pham: "619ba89ed4bd66924d5ef57c",
      so_luong: 2,
      gia_ban: 20,
      mau_sac: null,
      id_don_hang: "61a9b15554af309f65e78635",
      tong_gia: 40,
    },
    {
      id_san_pham: "619bbedaeab099fd38ea5bc2",
      so_luong: 1,
      gia_ban: 15,
      mau_sac: null,
      id_don_hang: "61a9b15554af309f65e78635",
      tong_gia: 15,
    },
    {
      id_san_pham: "619bc0d8eab099fd38ea5c7e",
      so_luong: 3,
      gia_ban: 4,
      mau_sac: null,
      id_don_hang: "61a9b15554af309f65e78635",
      tong_gia: 12,
    },
  ];
  let payload = carts
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/x-www-form-urlencoded",
  };
  let orderFormData = new FormData();
  carts.forEach((item) => {
    orderFormData.append("carts[]", item);
  })
  

  const addCartDetails = async () => {
    carts.forEach((item) => {
      axios({
        method: "post",
        url:"http://localhost:8000/ct_dh/create",
        data: item
      })
    })
    
  };
  return (
    <div>
      <button onClick={addCartDetails}>checkout</button>
    </div>
  );
}

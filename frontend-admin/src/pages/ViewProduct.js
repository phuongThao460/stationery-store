/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";

function ViewProduct(props) {
  const {idItem} = props;
  let [responseData, setResponseData] = React.useState(null);

  React.useEffect(() => {
    axios
      .post("http://localhost:8000/san_pham/", { san_pham_id: idItem })
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
      });
  }, []);
  if (!responseData) return null;
  return (
    <>
      <div>
        <p>id: {responseData._id}</p>
        <p>name: {responseData.ten_sp}</p>
        <p>amount: {responseData.so_luong}</p>
        <p>
          date: {new Date(responseData.ngay_nhap).toLocaleDateString()}
        </p>
        <p>description: {responseData.mo_ta}</p>
        <p>im price: {responseData.don_gia_nhap}</p>
        <p>ex-price: {responseData.don_gia_xuat}</p>
        <p>type: {responseData.id_loai_sp.ten_loai_sp}</p>
        <p>supp: {responseData.id_nha_cc.ten_nha_cc}</p>
        <p>
          color:
          {responseData.id_mau_sac.map((item) => (
            <input type="color" value={item.ten_mau} />
          ))}
        </p>

        <p>id mater: {responseData.id_chat_lieu.ten_chat_lieu}</p>
        <p>rate: {responseData.ti_le_danh_gia}</p>
      </div>
    </>
  );
}

export default ViewProduct;

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function ViewListStatistics() {
  const [statis, setStatis] = useState([]);
  const getAllStati = () => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/thong_ke/")
      .then((res) => setStatis(res.data));
  };
  useEffect(() => {
    getAllStati();
  }, []);
  return (
    <>
      <h1>Statistics</h1>
      <table
        className="table table-bordered table-hover"
        style={{ backgroundColor: "#fff",width: "1120px" }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col" style={{ width: "120px" }}>Start Day</th>
            <th scope="col" style={{ textAlign: "center", width: "120px" }}>
              End Day
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Total Order
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Voucher Discount
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Total Sales
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Total Import Price
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Total Profits
            </th>
            <th scope="col" style={{ width: "273px", textAlign: "center" }}>
              Staff Create
            </th>
          </tr>
        </thead>
        <tbody>
          {statis.length !== 0
            ? statis.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item._id.substr(14)}</th>
                  <td>{new Date(item.ngay_bat_dau).toLocaleDateString("en-CA")}</td>
                  <td>{new Date(item.ngay_ket_thuc).toLocaleDateString("en-CA")}</td>
                  <td>{item.tong_tien_san_pham_ban_duoc}</td>
                  <td>{item.tong_tien_giam_boi_voucher}</td>
                  <td>{item.tong_doanh_thu}</td>
                  <td>{item.tong_gia_nhap}</td>
                  <td>{item.tong_loi_nhuan}</td>
                  <td>{item.id_nv}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
}

export default ViewListStatistics;

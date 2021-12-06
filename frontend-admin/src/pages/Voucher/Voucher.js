/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewVoucher from "./ViewVoucher";
import { BiPlusMedical } from "react-icons/bi";

function Voucher() {
  const styled = {
    textOverflow: "ellipsis",
    width: "100px",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const [vouchers, setVouchers] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [minNumberDay, setMinNumberDay] = useState(0);
  const [minTotal, setMinTotal] = useState(0);
  const [startApply, setStartApply] = useState(0);
  const [endApply, setEndApply] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState(0);
  const [dayCreate, setDayCreate] = useState("");
  const [percent, setPercent] = useState(0);
  const [inUsed, setInUsed] = useState(0);

  const getAllVoucher = async () => {
    const data = await axios.get("http://localhost:8000/voucher/");
    setVouchers(data.data);
  };

  useEffect(() => {
    getAllVoucher();
    console.log(vouchers);
  }, []);
  return (
    <>
      <div className="hearder">
        <h1>Vouchers</h1>
        <div className="btn">
          <button className="btn-add">
            <Link
              to="/voucher/add-voucher"
              style={{
                textDecoration: "none",
                color: "white",
                wordBreak: "break-word",
                overflow: "hidden",
              }}
            >
              <BiPlusMedical />
              <span>Add Voucher</span>
            </Link>
          </button>
        </div>
      </div>
      <table className="table table-hover" style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col">Start Day</th>
            <th scope="col">End Day</th>
            <th scope="col">Percent</th>
            <th scope="col">Day Create</th>
            <th scope="col">Status</th>
            <th scope="col">Number In Used</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((item, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <th scope="row" style={styled}>
                {item._id.substr(14)}
              </th>
              <td>
                {new Date(item.ngay_bat_dau_ap_dung).toLocaleDateString(
                  "en-GB"
                )}
              </td>
              <td>
                {new Date(item.ngay_ket_thuc_ap_dung).toLocaleDateString(
                  "en-GB"
                )}
              </td>
              <td>{item.phan_tram_giam}</td>
              <td>{new Date(item.ngay_tao).toLocaleDateString("en-GB")}</td>
              <td>{item.tinh_trang}</td>
              <td>{item.so_lan_duoc_su_dung}</td>
              <td>
                <button
                  className="btn-view"
                  onClick={() => {
                    setModalShow(true);
                    setDayStart(item.ngay_bat_dau_ap_dung);
                    setDayEnd(item.ngay_ket_thuc_ap_dung);
                    setMinNumberDay(item.so_ngay_kich_hoat_tai_khoan_toi_thieu);
                    setMinTotal(item.tong_tien_mua_hang_tich_luy_toi_thieu);
                    setPercent(item.phan_tram_giam);
                    setStartApply(item.ngay_bat_dau_ap_dung);
                    setEndApply(item.ngay_ket_thuc_ap_dung);
                    setDayCreate(item.ngay_tao);
                    setAmount(item.so_luong_voucher);
                    setInUsed(item.so_lan_duoc_su_dung);
                    setStatus(item.tinh_trang ? "Available" : "Inavailable");
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalShow ? (
        <ViewVoucher
          show={modalShow}
          onHide={() => setModalShow(false)}
          dayStart={dayStart}
          dayEnd={dayEnd}
          dayCreate={dayCreate}
          minNumberDay={minNumberDay}
          minTotal={minTotal}
          percent={percent}
          startApply={startApply}
          endApply={endApply}
          status={status}
          inUsed={inUsed}
          amount={amount}
        />
      ) : null}
    </>
  );
}

export default Voucher;

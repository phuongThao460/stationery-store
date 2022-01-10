import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Vouchers() {
  const [vouchers, setVouchers] = React.useState([]);
  const [modalShow, setModalShow] = useState(false);
  const customerInfo = JSON.parse(
    window.sessionStorage.getItem("customer-account")
  );
  const getAllVoucher = async () => {
    const data = await axios.post("https://stationery-store-tmdt.herokuapp.com/voucher/ttkh", {
      id_ttkh: customerInfo._id,
    });
    console.log(data.data);
    setVouchers(data.data);
  };

  useEffect(() => {
    if(customerInfo != null){
      getAllVoucher();
    }
    else {
      setVouchers([]);
    }
  }, []);
  return (
    <div className="main-right">
      <h2>Your Vouchers</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{ fontSize: "20px" }}>
            <th scope="col" style={{ textAlign: "center" }}>
              ID
            </th>
            <th scope="col" style={{ textAlign: "center", width: "320px" }}>
              Name
            </th>
            <th scope="col" style={{ width: "122px" }}>
              Start Day
            </th>
            <th scope="col" style={{ textAlign: "center", width: "122px" }}>
              End Day
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Percent
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((item, index) => (
            <tr key={index} style={{ textAlign: "center", fontSize: "20px" }}>
              <th scope="row">{item._id.substr(14)}</th>
              <td>{item.ten_voucher}</td>
              <td style={{ textAlign: "start", lineHeight: "1" }}>
              {new Date(item.ngay_bat_dau_ap_dung).toLocaleDateString("en-CA")}
              </td>
              <td style={{ textAlign: "end" }}>
              {new Date(item.ngay_ket_thuc_ap_dung).toLocaleDateString("en-CA")}
              </td>
              <td>{item.phan_tram_giam}</td>
              <td>
                <button
                  className="btn-view"
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Vouchers

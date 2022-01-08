/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import WriteFeedback from "./WriteFeedback";

function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [item, setItem] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const customerInfo = JSON.parse(
    window.localStorage.getItem("customer-account")
  );
  const getFeedbackWaiting = async () => {
    await axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/tkkh/feedbacks_from_ttkh",
        { id_ttkh: customerInfo._id }
      )
      .then((res) => {
        setFeedback(res.data.san_pham_cho_danh_gia);
      });
  };
  useEffect(() => {
    getFeedbackWaiting();
  }, []);
  return (
    <div className="main-right">
      <h2>Your Order</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{ fontSize: "30px" }}>
            <th scope="col" style={{ textAlign: "center" }}>
              ID
            </th>
            <th scope="col" style={{ width: "420px" }}>
              Product
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item, index) => (
            <tr key={index} style={{ textAlign: "center", fontSize: "25px" }}>
              <th scope="row">{item._id.substr(14)}</th>
              <td>{item[0]}</td>
              <td></td>
              <td>
                <button
                  className="btn-view"
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  Send Reviews
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalShow ? <WriteFeedback item={item} /> : null}
    </div>
  );
}

export default Feedback;

import React, { useState, useEffect } from "react";
import ModalReviews from "./ModalReviews";
import axios from "axios";
function Reviews() {
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getAllReviews = async () => {
      try {
        const data = await axios.get("http://localhost:8000/danh_gia/");
        setReviews(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllReviews();
    console.log("just run once");
  }, []);
  return (
    <>
      <h1>Reviews</h1>
      <table className="table table-hover" style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col">Product</th>
            <th scope="col">Comment</th>
            <th scope="col">Rating</th>
            <th scope="col">Status</th>
            <th scope="col" style={{ width: "200px", textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.length !== 0
            ? reviews.map((item, index) => (
                <tr key={index}>
                  <th scope="row">
                    {item._id.substr(14)}
                  </th>
                  <td className="name-style"
                  >
                    {item.id_san_pham.ten_sp}
                  </td>
                  <td>{item.noi_dung_danh_gia}</td>
                  <td style={{ textAlign: "end" }}>
                    {item.so_sao_danh_gia}
                  </td>
                  <td>{item.tinh_trang ? "Publish" : "Waiting"}</td>
                  <td style={{ textAlign: "center" }}>
                    <button className="btn-view">View</button>
                    <button className="btn-add">Publish</button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {modalShow ? (
        <ModalReviews show={modalShow} onHide={() => setModalShow(false)} />
      ) : null}
    </>
  );
}

export default Reviews;

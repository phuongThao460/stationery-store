import React, { useState, useEffect } from 'react'
import ModalReviews from './ModalReviews'
import axios from 'axios'
function Reviews() {
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getAllReviews = async () => {
      try {
        const data = await axios.get("http://localhost:8000/tkkh");
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
      <h1>Customers</h1>
      <table className="table table-hover" style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col">Customer's Name</th>
            <th scope="col">Email</th>
            <th scope="col">Accumulated Point</th>
            <th scope="col" style={{ width: "200px", textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.length !== 0
            ? reviews.map((item, index) => (
                <tr key={index}>
                  <th scope="row" style={{ width: "167px" }}>
                    {item._id.substr(14)}
                  </th>
                  <td>{item.id_ttkh.ten_kh}</td>
                  <td>{item.id_ttkh.email}</td>
                  <td style={{ textAlign: "end", width: "164px" }}>
                    {item.id_ttkh.diem_tich_luy}
                  </td>
                  <td style={{ width: "200px", textAlign: "center" }}>
                    <button
                      className="btn-view"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {modalShow ? (
        <ModalReviews
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
    </>
  )
}

export default Reviews

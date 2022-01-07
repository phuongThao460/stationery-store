import React, { useState} from 'react'

function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="main-right">
      <h2>Your Order</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{ fontSize: "30px" }}>
            <th scope="col" style={{ textAlign: "center" }}>
              ID
            </th>
            <th scope="col" style={{ textAlign: "center", width: "122px" }}>
              Date Order
            </th>
            <th scope="col" style={{ width: "420px" }}>
              Product
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Total
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
              <td>{new Date(item.ngay_dat).toLocaleDateString("en-GB")}</td>
              <td style={{ textAlign: "start", lineHeight: "1" }}>
                
              </td>
              <td style={{ textAlign: "end" }}>
                <span style={{ marginRight: "5px !important" }}>
                  ${item.tong_tien.toFixed(2)}
                </span>
              </td>
              <td>{}</td>
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

export default Feedback

import axios from "axios";
import React, { useState } from "react";
import { createRef } from "react";
import { Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
function WriteFeedback(props) {
  const id_account = window.localStorage.getItem("id_account");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const comment = createRef();
  const styled = {
    display: "none",
  };
  const writeReviews = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/danh_gia/create", {
        id_tkkh: id_account,
        id_san_pham: props.id,
        noi_dung_danh_gia: comment.current.value,
        so_sao_danh_gia: rating,
        tinh_trang: false,
      })
      .then(() => {
        alert("Your reviews will be check and display if it suitable");
        window.location.reload();
      });
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Order Detail</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="orderInfo" style={{ fontSize: "25px" }}></div>
          <table>
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <span>Item</span>
              </td>
              <td>{props.item}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label style={{ backgroundColor: "#fff" }}>
                      <input
                        style={styled}
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={19}
                        className="star"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td>Comment</td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea className="comment" ref={comment}/>
              </td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-add" onClick={() => writeReviews()}>
            Send
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WriteFeedback;

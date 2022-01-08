import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
function WriteFeedback(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const styled = {
    display: "none",
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
          <table className="table table-light">
            <tr>
              <td>Item</td>
              <td>{props.item}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label>
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
                        size={100}
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
              <td><textarea className="comment"/></td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-delete">Cancel</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WriteFeedback;

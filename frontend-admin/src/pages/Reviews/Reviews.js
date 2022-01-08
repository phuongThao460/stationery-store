import React, { useState, useEffect } from "react";
import ModalReviews from "./ModalReviews";
import axios from "axios";
function Reviews() {
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [product, setProduct] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getAllReviews = async () => {
      try {
        const data = await axios.get(
          "https://stationery-store-tmdt.herokuapp.com/danh_gia/"
        );
        setReviews(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllReviews();
    console.log("just run once");
  }, []);

  const updateStatus = (id) => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/danh_gia/update", {
        _id: id,
        tinh_trang: "true",
      })
      .then(() => window.location.reload());
  };
  return (
    <>
      <h1>Reviews</h1>
      <table
        className="table table-bordered table-hover"
        style={{ backgroundColor: "#fff" }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col">Comment</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Rating
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>
            <th scope="col" style={{ width: "273px", textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.length !== 0
            ? reviews.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item._id.substr(14)}</th>
                  <td>{item.noi_dung_danh_gia}</td>
                  <td style={{ textAlign: "end" }}>{item.so_sao_danh_gia}</td>
                  <td>{item.tinh_trang ? "Publish" : "Waiting"}</td>
                  <td style={{ textAlign: "center" }}>
                    {item.tinh_trang ? (
                      <button
                        className="btn-view"
                        onClick={() => {
                          setModalShow(true);
                          setEmail(item.id_tkkh.email);
                          setProduct(item.id_san_pham.ten_sp);
                          setRating(item.so_sao_danh_gia);
                          setComment(item.noi_dung_danh_gia);
                        }}
                      >
                        View
                      </button>
                    ) : (
                      <>
                        <button
                          className="btn-view"
                          onClick={() => {
                            setModalShow(true);
                            setEmail(item.id_tkkh.email);
                            setProduct(item.id_san_pham.ten_sp);
                            setRating(item.so_sao_danh_gia);
                            setComment(item.noi_dung_danh_gia);
                          }}
                        >
                          View
                        </button>
                        <button
                          className="btn-add"
                          onClick={() => updateStatus(item._id)}
                        >
                          Publish
                        </button>
                        <button className="btn-delete">Cancel</button>
                      </>
                    )}
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
          email={email}
          rating={rating}
          product={product}
          comment={comment}
        />
      ) : null}
    </>
  );
}

export default Reviews;

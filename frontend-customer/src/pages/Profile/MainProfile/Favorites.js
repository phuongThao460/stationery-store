import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../../../components/Footer'

function Favorites() {
  //tkkh/remove_wishlist
  const [wishList, setWishList] = useState([]);
  const cusAccountInfo = JSON.parse(
    window.sessionStorage.getItem("customer-account")
  );
  useEffect(() => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/tkkh/wishlist_from_ttkh",
        { id_ttkh: cusAccountInfo._id }
      )
      .then((res) => setWishList(res.data.wish_list));
  }, []);
  return (
    <div className="main-right">
      <h2>Your Favorites</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col" style={{ width: "220px", textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((item) => (
            <tr>
              <td>{item.ten_sp}</td>
              <td style={{textAlign: "center"}}>
                <Link className="btn-view link" to={"/products/" + item._id}>View</Link> | 
                <button className="btn-view">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;

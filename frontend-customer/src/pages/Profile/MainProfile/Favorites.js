import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    axios.get("").then((res) => setWishList(res.data));
  }, []);
  return (
    <div className="main-right">
      <h2>Your Favorites</h2>
      <table>
        <thread>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thread>
        <tbody>
          {wishList.map((item) => (
            <tr>
              <td>{item.ten_sp}</td>
              <td>
                <Link to={"/products/" + item._id}>View Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;

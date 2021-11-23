import React from "react";
import { Link } from "react-router-dom";
import "../style/Dashboard.css";
import { BiPlusMedical } from "react-icons/bi";
function Dashboard() {
  return (
    <>
      <div className="hearder">
        <h1>Produts</h1>
        <div className="btn">
          <button className="btn-add">
            <BiPlusMedical />
            <span>Add Product</span>
          </button>
          <button className="btn-add">
            <BiPlusMedical />
            <span>Add List of Product</span>
          </button>
        </div>
      </div>

      <div class="table-responsive-md">
        <table
          class="table table-hover"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th scope="col">ID</th>
              <th scope="col" className="name-item">
                Name
              </th>
              <th scope="col">Count</th>
              <th scope="col">Import Date</th>
              <th scope="col">Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <th scope="row" style={{ maxWidth: "90px" }}>
                9015-DF-11-3-1
              </th>
              <td style={{ maxWidth: "125px" }}>
                Đồng Hồ Thông Minh Apple Watch Series 3 GPS Aluminum Case With
                Sport Band - Hàng Chính Hãng VN/A
              </td>
              <td style={{ width: "30px" }}>12</td>
              <td style={{ maxWidth: "60px" }}>2019-09-09</td>
              <td>Sketchbook</td>
              <td style={{ maxWidth: "141px" }}>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
                <button className="btn-view">View</button>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th scope="row" style={{ maxWidth: "90px" }}>
                9015-DF-11-3-1
              </th>
              <td style={{ maxWidth: "125px" }}>
                Đồng Hồ Thông Minh Apple Watch Series 3 GPS Aluminum Case With
                Sport Band - Hàng Chính Hãng VN/A
              </td>
              <td style={{ width: "30px" }}>12</td>
              <td style={{ maxWidth: "60px" }}>2019-09-09</td>
              <td>Sketchbook</td>
              <td style={{ maxWidth: "141px" }}>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
                <button className="btn-view">View</button>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th scope="row" style={{ maxWidth: "90px" }}>
                9015-DF-11-3-1
              </th>
              <td style={{ maxWidth: "125px" }}>
                Đồng Hồ Thông Minh Apple Watch Series 3 GPS Aluminum Case With
                Sport Band - Hàng Chính Hãng VN/A
              </td>
              <td style={{ width: "30px" }}>12</td>
              <td style={{ maxWidth: "60px" }}>2019-09-09</td>
              <td>Sketchbook</td>
              <td style={{ maxWidth: "141px" }}>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
                <Link to={"/content"}>
                  <button className="btn-view">View</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;

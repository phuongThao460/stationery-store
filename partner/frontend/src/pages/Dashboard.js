import React from "react";
import "../style/Dashboard.css";
function Dashboard() {
  return (
    <div class="table-responsive-md">
      <table
        class="table table-hover"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <thead>
          <tr style={{textAlign: "center"}}>
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
          <tr style={{textAlign: "center"}}>
            <th scope="row" style={{maxWidth: "90px"}}>9015-DF-11-3-1</th>
            <td style={{maxWidth: "125px"}}>
              Đồng Hồ Thông Minh Apple Watch Series 3 GPS Aluminum Case With
              Sport Band - Hàng Chính Hãng VN/A
            </td>
            <td style={{width: "30px"}}>12</td>
            <td style={{maxWidth: "60px"}}>2019-09-09</td>
            <td>Sketchbook</td>
            <td style={{maxWidth: "141px"}}>
              <button className="btn-edit" style={{backgroundColor: "green", color: "white", padding: "4px 14px"}}>Edit</button>
              <button className="btn-delete" style={{backgroundColor: "red", color: "white", padding: "4px 14px"}}>Delete</button>
              <button className="btn-view" style={{backgroundColor: "transparent", marginRight: "auto"}}>View</button>
            </td>
          </tr>
          <tr style={{textAlign: "center"}}>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10000</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr style={{textAlign: "center"}}>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

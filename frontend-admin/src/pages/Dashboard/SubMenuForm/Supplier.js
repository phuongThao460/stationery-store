import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Supplier() {
  const [supplier, setSupplier] = useState([]);
  useEffect(() => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/nha_cc/")
      .then((res) => {
        setSupplier(res.data);
      });
  }, []);
  return (
    <div>
      <table className="table table-hover"  style={{ backgroundColor:"#FFF" }}>
        <thead>
          <tr>
            <th scope="col">
              ID
            </th>
            <th scope="col">Name</th>
            <th scope="col">Tele.</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {supplier.map((item) => (
            <tr>
              <th scope="row">{item._id.substr(14)}</th>
              <td>{item.ten_nha_cc}</td>
              <td>{item.sdt}</td>
              <td>{item.email}</td>
              <td>{item.dia_chi}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Supplier;

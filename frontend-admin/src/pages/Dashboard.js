/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { Link } from "react-router-dom";
import "../style/Dashboard.css";
import { BiPlusMedical } from "react-icons/bi";
import axios from "axios";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idRow: 0,
      nameType: "",
      lstProduct: [],
      lstType: [],
    };
    this.getListProduct();
    //this.getType(this.props.id);
  }
  getType = (idType) => {
    axios
      .post("http://localhost:8000/loai_sp/", { loai_sp_id: idType })
      .then((res) => {
        //console.log(res.data.ten_loai_sp);
        this.setState({ nameType: res.data.ten_loai_sp });
      });
  };
  getListProduct = () => {
    axios.get("http://localhost:8000/san_pham/").then((res) => {
      this.state.lstType = res.data;
      this.state.lstProduct = this.state.lstType.reverse();
      this.setState(this, () => {
        this.getType(this.state.lstType[0].id_loai_sp);
      })
      this.setState(this);
      console.log(this.state.lstType[0].id_loai_sp);
    });
  };

  render() {
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
              {this.state.lstProduct.map((item, index) => (
                <tr style={{ textAlign: "center" }}>
                  <th scope="row" style={{ maxWidth: "90px" }}>
                    {item._id}
                  </th>
                  <td style={{ maxWidth: "125px" }}>{item.ten_sp}</td>
                  <td style={{ width: "30px" }}>{item.so_luong}</td>
                  <td style={{ maxWidth: "60px" }}>{new Date (item.ngay_nhap).toLocaleDateString()}</td>
                  <td>{this.state.nameType}</td>
                  <td style={{ maxWidth: "141px" }}>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                    <Link to={"/products/" + item._id}>
                      <button className="btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Dashboard;

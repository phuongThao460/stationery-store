/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { Link } from "react-router-dom";
import "../style/Dashboard.css";
import { BiPlusMedical } from "react-icons/bi";
import axios from "axios";
class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idRow: 0,
      showModal: false,
      nameType: "",
      lstProduct: [],
      activeObj: null,
    };
  }

  componentDidMount() {
    this.getListProduct();
  }

  async getListProduct() {
    await axios
      .get("http://localhost:8000/san_pham/")
      .then((res) => {
        this.setState({
          lstProduct: res.data,
        });
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }
  openModal(){
    this.setState({showModal: true});
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <>
        <div className="hearder">
          <h1>Produts</h1>
          <div className="btn">
            <button className="btn-add">
              <Link
                to="/products/add-product"
                style={{ textDecoration: "none", color: "white", wordBreak: "break-word", overflow: "hidden" }}
              >
                <BiPlusMedical />
                <span>Add Product</span>
              </Link>
            </button>
            <button className="btn-add">
              <BiPlusMedical />
              <span>Add List of Product</span>
            </button>
          </div>
        </div>

        <div className="table-responsive-md">
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
                  <td style={{ maxWidth: "60px" }}>
                    {new Date(item.ngay_nhap).toLocaleDateString()}
                  </td>
                  <td>
                    {item.id_loai_sp != null ? item.id_loai_sp.ten_loai_sp : ""}
                  </td>
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

export default ListProduct;

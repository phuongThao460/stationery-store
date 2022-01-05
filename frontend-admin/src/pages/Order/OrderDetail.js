/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
//import React, { useEffect, useState } from "react";
import React, { Component } from "react";
import { Link } from 'react-router-dom'
export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_order: window.location.pathname.substring(7),
      order: {},
      customer: {},
      details: [],
      address: "",
      status: "",
    };
  }
  componentDidMount() {
    this.getOrderDetail();
  }
  getOrderDetail = async () => {
    await axios
      .post("https://stationery-store-tmdt.herokuapp.com/don_hang/", { _id: this.state.id_order })
      .then((res) => {
        this.state.order = res.data;
        this.state.customer = res.data.id_ttkh;
        this.state.status = res.data.id_ttdh;
        this.setState(this);
        this.setState(() => this.getAddressCustomer(this.state.customer.id_phuong));
        console.log(this.state.customer.id_phuong);
      });
    await axios
      .post("https://stationery-store-tmdt.herokuapp.com/ct_dh/by_dh_id", {
        id_don_hang: this.state.id_order,
      })
      .then((res) => {
        this.state.details = res.data;
        this.setState(this);
        console.log(res.data);
      });
  };
  getAddressCustomer = (idAddr) => {
    axios.post("https://stationery-store-tmdt.herokuapp.com/ttkh/getAddress", { _id: idAddr })
      .then((res) => {
        //console.log(res.data);
        this.setState({ address: res.data });
      });
  };
  updateStatus = (event) => {
    axios.post("https://stationery-store-tmdt.herokuapp.com/don_hang/update_by_id", {
      _id: this.state.id_order,
      id_ttdh: event,
    });
    
  };
  render() {
    const { order, customer, address, status } = this.state;
    let total = 0;
    return (
      <>
      <Link to="/order">Back to Order</Link>
        <h1>Order Detail</h1>
        <div className="orderInfo">
          <div>
            Order's ID:
            <b>{order._id}</b>
          </div>
          <div>
            <b>Order date: </b>
            {new Date(order.ngay_dat).toLocaleDateString('en-GB')}
          </div>
          <div>
            <b>Delivery date:</b>
            {new Date(order.ngay_giao).toLocaleDateString('en-GB')}
          </div>
          <div>
            <b>Note: </b>
            {order.ghi_chu}
          </div>
        </div>

        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <table className="cusInfo">
            <tr>
              <th className="table-title">Payment Info</th>
              <th className="table-title">Shipping Address</th>
            </tr>
            <tr>
              <td>
                <div>
                  <b>{customer.ten_kh}</b>
                </div>
                <div>{customer.email}</div>
                <div>{customer.sdt}</div>
              </td>
              <td>
                <div>
                  <b>{customer.ten_kh}</b>
                </div>
                <div>{customer.dia_chi + ", " + address}</div>
                <div>{customer.sdt}</div>
              </td>
            </tr>
          </table>
        </div>
        <table className="table table-light" style={{ width: "91%" }}>
          <thead>
            <tr>
              <th scope="col" className="table-title">
                Item
              </th>
              <th
                scope="col"
                className="table-title"
                style={{ width: "70px", textAlign: "center" }}
              >
                Qty.
              </th>
              <th
                scope="col"
                className="table-title"
                style={{ width: "100px", textAlign: "center" }}
              >
                Item Price
              </th>
              <th
                scope="col"
                className="table-title"
                style={{ width: "105px", textAlign: "center" }}
              >
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((item) => (
              <tr>
                <td>{item.id_san_pham.ten_sp}</td>
                <td style={{ textAlign: "end" }}>{item.so_luong}</td>
                <td style={{ textAlign: "end" }}>${item.gia_ban}</td>
                <td style={{ textAlign: "end" }}>${item.tong_gia}</td>
                <td style={{ display: "none" }}>
                  {(total = total + item.tong_gia)}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" style={{ textAlign: "end" }}>
                Shipping
              </td>
              <td style={{ textAlign: "end" }}>0</td>
            </tr>
            <tr>
              <td colspan="3" style={{ textAlign: "end" }}>
                Sales Tax
              </td>
              <td style={{ textAlign: "end" }}>0</td>
            </tr>
            <tr>
              <td colspan="3" style={{ textAlign: "end" }}>
                <b>Total</b>
              </td>
              <td style={{ textAlign: "end" }}>${total}</td>
            </tr>
          </tbody>
        </table>
        {status.trang_thai === "New" ? (
          <div>
            <button
              className="btn-edit"
              onClick={() => this.updateStatus("61a2494520a54c9a7f3b02a9")}
            >
              Confirm
            </button>
            <button
              className="btn-delete"
              onClick={() => this.updateStatus("61a2498320a54c9a7f3b02dd")}
            >
              Cancel
            </button>
          </div>
        ) : status.trang_thai === "Confirm" ? (
          <div>
            <button
              className="btn-edit"
              onClick={() => this.updateStatus("61a2496d20a54c9a7f3b02cd")}
            >
              Shipping
            </button>
          </div>
        ) : status.trang_thai === "Shipping" ? (
          <div>
            <button
              className="btn-edit"
              onClick={() => this.updateStatus("61a2497920a54c9a7f3b02d6")}
            >
              Finished
            </button>
          </div>
        ) : null}

      </>
    );
  }
}

// function OrderDetail() {
//   const id_order = window.location.pathname.substring(7);
//   const [order, setOrder] = useState({});
//   const getOrderDetail = async () => {
//     // await axios.post("http://localhost:8000/don_hang/", {
//     //   _id: id_order,
//     // }).then((response) => {
//     //   setOrder(response.data);
//     //   console.log(order);
//     // });
//     try {
//       const data = await axios.post("http://localhost:8000/don_hang/", {
//         _id: id_order,
//       });
//       setOrder(data.data);
//       console.log(data.data)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getOrderDetail();
//   }, []);

//   return <div></div>;
// }

// export default OrderDetail;

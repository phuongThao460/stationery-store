/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
//import React, { useEffect, useState } from "react";
import "./OrderDetail.css";
import React, { Component } from "react";

export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_order: window.location.pathname.substring(7),
      order: {},
      customer: {},
      address: "",
      status: "",
    };
  }
  componentDidMount() {
    this.getOrderDetail();
  }
  getOrderDetail = async () => {
    await axios
      .post("http://localhost:8000/don_hang/", { _id: this.state.id_order })
      .then((res) => {
        this.state.order = res.data;
        this.state.customer = res.data.id_ttkh;
        this.state.status = res.data.id_ttdh;
        this.setState(this);
        this.setState(() => this.getAddressCustomer(this.state.customer._id));
        console.log(this.state.order.id_ttdh.trang_thai);
      });
  };
  getAddressCustomer = (idAddr) => {
    axios
      .post("http://localhost:8000/ttkh/getAddress", { ttkh_id: idAddr })
      .then((res) => {
        console.log(res.data);
        this.setState({ address: res.data });
      });
  };
  updateStatus = (event) => {
    axios.post("http://localhost:8000/don_hang/update_by_id", {
      _id: this.state.id_order,
      id_ttdh: event,
    });
  };
  render() {
    const { order, customer, address, status } = this.state;
    return (
      <>
        <div className="orderInfo">
          <div>
            <b>Order's ID: </b>
            {order._id}
          </div>
          <div>
            <b>Order date: </b>
            {new Date(order.ngay_dat).toLocaleDateString()}
          </div>
          <div>
            <b>Delivery date: </b>
            {new Date(order.ngay_giao).toLocaleDateString()}
          </div>
          <div>
            <b>trang thai: </b>
            {status.trang_thai}
          </div>
          <div>
            <b>Note: </b>
            {order.ghi_chu}
          </div>
          <div>
            <b>Subtotal: </b>
            {order.tong_phu}
          </div>
          <div>
            <b>Shipping tax: </b>
            {order.phi_ship}
          </div>
          <div>
            <b>Total: </b>
            {order.tong_tien}
          </div>
        </div>

        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <table className="cusInfo">
            <tr>
              <th>Payment Info</th>
              <th>Shipping Address</th>
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
        <table className="table table-light" style={{width:"91%"}}>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col" style={{width:"70px", textAlign:"center"}}>Qty.</th>
              <th scope="col" style={{width:"150px", textAlign:"center"}}>Item Price</th>
              <th scope="col" style={{width:"150px",textAlign:"center"}}>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td colspan="3" style={{textAlign:"end"}}>Shipping</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td colspan="3" style={{textAlign:"end"}}>Sales Tax</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td colspan="3" style={{textAlign:"end"}}><b>Total</b></td>
              <td>@twitter</td>
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

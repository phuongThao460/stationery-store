/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
//import React, { useEffect, useState } from "react";

import React, { Component } from "react";

export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_order: window.location.pathname.substring(7),
      order: {},
      customer: {},
      address: ""
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
        this.setState(this);
        this.setState(() => this.getAddressCustomer(this.state.customer._id))
        console.log(this.state.order.id_ttdh.trang_thai);
      });
  };
  getAddressCustomer = (idAddr) => {
    axios
      .post("http://localhost:8000/ttkh/getAddress", { ttkh_id: idAddr })
      .then((res) => {
        console.log(res.data);
        this.setState({address: res.data})
      });
  };
  render() {
    const { order, customer, address } = this.state;
    return (
      <>
        <div>
          <b>id: </b>
          {order._id}
        </div>
        <div>
          <b>ngay giao: </b>
          {new Date(order.ngay_dat).toLocaleDateString()}
        </div>
        <div>
          <b>ngay dat: </b>
          {new Date(order.ngay_giao).toLocaleDateString()}
        </div>
        <div>
          <b>ten khach hang: </b>
          {customer.ten_kh}
        </div>
        <div>
          <b>so dien thoai: </b>
          {customer.sdt}
        </div>
        <div>
          <b>dia chi: </b>
          {customer.dia_chi + ", " + address}
        </div>
        <div>
          <b>email: </b>
          {customer.email}
        </div>
        <div>
          <b>diem tich luy: </b>
          {customer.diem_tich_luy}
        </div>
        {customer.gioi_tinh ? (
          <div>
            <b>gioi tinh: </b>Nam
          </div>
        ) : (
          <div>
            <b>gioi tinh: </b>Nu
          </div>
        )}
        <div>
          <b>trang thai: </b>
          {order.trang_thai}
        </div>
        <div>
          <b>ghi chu: </b>
          {order.ghi_chu}
        </div>
        <div>
          <b>tong phu: </b>
          {order.tong_phu}
        </div>
        <div>
          <b>phi ship: </b>
          {order.phi_ship}
        </div>
        <div>
          <b>tong tien: </b>
          {order.tong_tien}
        </div>
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

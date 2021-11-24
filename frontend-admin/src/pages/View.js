/* eslint-disable array-callback-return */
/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React, { Component } from "react";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idItem: document.location.pathname.substring(10),
      product: null
    };
  }

  componentDidMount() {
    this.getItem();
  }

  async getItem() {
    await axios
      .post("http://localhost:8000/san_pham/", {
        san_pham_id: this.state.idItem,
      })
      .then((res) => {
        this.setState({product: res.data})
        console.log(res.data)
      }).catch((e) => console.log(e));
  };
  render() {
    let data = <div></div>;
    if (this.state.product != null) {
      data = (
        <div>
          <p>id: {this.state.product._id}</p>
          <p>name: {this.state.product.ten_sp}</p>
          <p>amount: {this.state.product.so_luong}</p>
          <p>
            date: {new Date(this.state.product.ngay_nhap).toLocaleDateString()}
          </p>
          <p>description: {this.state.product.mo_ta}</p>
          <p>im price: {this.state.product.don_gia_nhap}</p>
          <p>ex-price: {this.state.product.don_gia_xuat}</p>
          <p>type: {this.state.product.q}</p>
          <p>supp: </p>
          <p>
            color: 
            
            <input type="color" value="#00000" />
            
          </p>

          <p>id mater: </p>
          <p>rate: </p>
        </div>
      )
    }
    return (
      <>
      {data}
      </>
    );
  }
}

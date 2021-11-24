/* eslint-disable array-callback-return */
/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React, { Component } from "react";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idItem: document.location.pathname.substring(10),
      itemInfo: {},
      color: "",
      type: "",
      material: "",
      supplier: "",
      colorarray: [],
      id: ""
    };
    this.getItem();
  }
  getItem = async () => {
    await axios
      .post("http://localhost:8000/san_pham/", {
        san_pham_id: this.state.idItem,
      })
      .then((res) => {
        this.state.itemInfo = res.data;
        const arrayColor = [];
        this.setState(this, () => {
          for (let i = 0; i < this.state.itemInfo.id_mau_sac.length; i++) {
            console.log("ID Color: " + this.state.itemInfo.id_mau_sac[i])
            arrayColor.push({idColor: this.state.itemInfo.id_mau_sac[i]});
          }
          
          arrayColor.map((item) => {
            this.getColor(item.idColor);
            this.state.colorarray.push({ color: this.state.color });
          });
          console.log("Array: " + arrayColor);
          console.log("Change ID to Name: " + this.state.colorarray);
          this.getMater(this.state.itemInfo.id_chat_lieu);
          this.getSupp(this.state.itemInfo.id_nha_cc);
          this.getType(this.state.itemInfo.id_loai_sp);
        });
        
      });
      
  };
  getColor = async (idColor) => {
    await axios
      .post("http://localhost:8000/mau_sac/", { mau_sac_id: idColor })
      .then((res) => {
        this.setState({ color: res.data.ten_mau });
        console.log("----------Show ID and Name Color----------")
        console.log("ID: " + idColor)
        console.log("Color: " + this.state.color)
      });
  };
  getType = (idType) => {
    axios
      .post("http://localhost:8000/loai_sp/", { loai_sp_id: idType })
      .then((res) => {
        this.setState({ type: res.data.ten_loai_sp });
      });
  };
  getSupp = (idSup) => {
    axios
      .post("http://localhost:8000/nha_cc/", { nha_cc_id: idSup })
      .then((res) => {
        this.setState({ supplier: res.data.ten_nha_cc });
      });
  };
  getMater = (idMat) => {
    axios
      .post("http://localhost:8000/chat_lieu/", { chat_lieu_id: idMat })
      .then((res) => {
        this.setState({ material: res.data.ten_chat_lieu });
      });
  };
  render() {
    return (
      <div>
        <p>id: {this.state.itemInfo._id}</p>
        <p>name: {this.state.itemInfo.ten_sp}</p>
        <p>amount: {this.state.itemInfo.so_luong}</p>
        <p>
          date: {new Date(this.state.itemInfo.ngay_nhap).toLocaleDateString()}
        </p>
        <p>descrpit: {this.state.itemInfo.mo_ta}</p>
        <p>im price{this.state.itemInfo.don_gia_nhap}</p>
        <p>ex-price{this.state.itemInfo.don_gia_xuat}</p>
        <p>id type: {this.state.type}</p>
        <p>id supp: {this.state.supplier}</p>
        <p>
          id color: <input type="color" value={this.state.color} />
        </p>

        <p>id mater: {this.state.material}</p>
        <p>rate: {this.state.itemInfo.ti_le_danh_gia}</p>
      </div>
    );
  }
}

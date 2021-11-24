/* eslint-disable array-callback-return */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { IoMdRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css";
import axios from "axios";
class Product extends React.Component {
	constructor() {
		super();
		this.state = {
			idProduct: document.location.pathname.substring(10),
			itemInfo: {},
      color: "",
      type: "",
      material: "",
      supplier: "",
      colorarray: [],
		}
		this.getItem();
	}
	getItem = () => {
    axios
      .post("http://localhost:8000/san_pham/", {
        san_pham_id: this.state.idProduct,
      })
      .then((res) => {
        this.state.itemInfo = res.data;
				console.log(this.state.idProduct)
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
	setSelectColor = e => {
		this.setState({color: e.target.value})
	}
  render() {
    return (
      <div className="Container-Product">
        <div className="Wrapper">
          <div className="ImgContainer" style={{marginRight: "120px"}}>
            <img
              alt=""
              className="Image"
              src="https://inbacha.com/wp-content/uploads/2021/05/in-so-tay-doc-quyen1.jpg"
            />
          </div>
          <div className="infoContainer">
            <h1 className="Title-Product">{this.state.itemInfo.ten_sp}</h1>
            <span className="Price">{this.state.itemInfo.don_gia_xuat}</span>
            <p className="Desc">
						{this.state.itemInfo.mo_ta}
            </p>

            <div className="FilterContainer">
              <div className="Filter">
                <span className="FilterTitle">Color</span>
                <div className="FilterColor"><input type="color" value={this.state.color} className="primary-color" onChange={this.setSelectColor}/></div>
                <div className="FilterColor" color="red" />
                <div className="FilterColor" color="gray" />
                <div className="FilterColor" color="orange" />
                <div className="FilterColor" color="blue" />
              </div>
            </div>
            <div className="AddContainer">
              <div className="AmountContainer">
                <IoMdRemove />
                <span className="Amount">1</span>
                <GrAdd />
              </div>
              <button className="Button">
                <BsHandbagFill style={{ marginRight: "7px" }} />
                ADD TO CART
              </button>
              <button className="Button">
                <BsFillSuitHeartFill style={{ marginRight: "7px" }} />
                ADD TO WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

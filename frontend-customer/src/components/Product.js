import React from "react";
import { IoMdRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css";
import axios from "axios";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProduct: document.location.pathname.substring(10),
      product: null,
      count: 1,
      arrayColor: [],
    };
  }
  componentDidMount() {
    this.getItem();
  }
  handleSubmit = () => {
    this.state.arrayProduct.push(this.state.product);
    this.setState(this);
  };
  async getItem() {
    await axios
      .post("http://localhost:8000/san_pham/", {
        san_pham_id: this.state.idProduct,
      })
      .then((res) => {
        this.setState({ product: res.data });
        //console.log(res.data.mau_sac);
        for (let i = 0; i < res.data.mau_sac.length; i++) {
          this.state.arrayColor.push(res.data.mau_sac[i]);
        }
        //this.state.arrayColor.push(res.data.mau_sac)
        //console.log(res.data.mau_sac[0]);
        //console.log(this.state.arrayColor);
        this.setState(this);
      })
      .catch((e) => console.log(e));
  }
  render() {
    let data = <div></div>;
    if (this.state.product != null) {
      data = (
        <div className="Container-Product">
          <div className="Wrapper">
            <div
              className="ImgContainer"
              style={{ marginRight: "120px", maxWidth: "450px" }}
            >
              <img
                alt=""
                className="Image"
                src="https://inbacha.com/wp-content/uploads/2021/05/in-so-tay-doc-quyen1.jpg"
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <div
                className="infoContainer"
                style={{ maxWidth: "397px", position: "relative" }}
              >
                <h1 className="Title-Product">{this.state.product.ten_sp}</h1>
                <span className="Price">
                  ${this.state.product.don_gia_xuat}
                </span>
                <p className="Desc">{this.state.product.mo_ta}</p>

                <div className="FilterContainer">
                  <div className="Filter">
                    <span className="FilterTitle">Color</span>
                    {this.state.arrayColor.map((item) => (
                      <input
                        type="color"
                        value={item}
                        className="primary-color"
                      />
                    ))}
                    {this.state.product.mau_sac.map((item) => console.log(item))}
                  </div>
                </div>
              </div>
              <div className="AddContainer">
                <div className="AmountContainer">
                  <IoMdRemove
                    onClick={() =>
                      this.setState({ count: this.state.count - 1 })
                    }
                  />
                  <span className="Amount">{this.state.count}</span>
                  <GrAdd
                    onClick={() =>
                      this.setState({ count: this.state.count + 1 })
                    }
                  />
                </div>
                <button
                  className="Button"
                  onClick={() => this.props.onAdd(this.state.product)}
                >
                  <BsHandbagFill style={{ marginRight: "7px" }} />
                  ADD TO CART
                </button>
                <button className="Button">
                  <BsFillSuitHeartFill style={{ marginRight: "7px" }} />
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
            {/* {console.log(this.state.arrayProduct)}
            {window.localStorage.setItem("products", JSON.stringify(this.state.arrayProduct))} */}
          </div>
        </div>
      );
    }
    return <>{data}</>;
  }
}

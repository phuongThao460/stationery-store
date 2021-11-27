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
      chooseColor: "",
      addCart: [],
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
        _id: this.state.idProduct,
      })
      .then((res) => {
        this.setState({ product: res.data });
        for (let i = 0; i < res.data.mau_sac.length; i++) {
          this.state.arrayColor.push(res.data.mau_sac[i]);
        }
        this.setState(this);
      })
      .catch((e) => console.log(e));
  }

  addToCart = (count, color) => {
    var cart = {
      _id: this.state.product._id,
      ten_sp: this.state.product.ten_sp,
      so_luong: count,
      don_gia_xuat: this.state.product.don_gia_xuat,
      mau_sac: color,
    }
    this.setState({addCart: [...this.state.addCart, cart]});
  };
  render() {
    const { product, addCart, count, chooseColor } = this.state;
    let data = <div></div>;
    if (product != null) {
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
                <h1 className="Title-Product">{product.ten_sp}</h1>
                <span className="Price">${product.don_gia_xuat}</span>
                <p className="Desc">{product.mo_ta}</p>

                <div className="FilterContainer">
                  <div className="Filter">
                    <span className="FilterTitle">Color</span>
                    {product.mau_sac.map((item) => (
                      <button
                        className="primary-color"
                        style={{ backgroundColor: `${item}` }}
                        onClick={() => this.setState({ chooseColor: item })}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="AddContainer">
                <div className="AmountContainer">
                  <IoMdRemove
                    onClick={() => {
                      if (this.state.count < 1) {
                        this.setState({ count: 1 });
                      } else {
                        this.setState({ count: count - 1 });
                      }
                    }}
                  />
                  <span className="Amount">{count}</span>
                  <GrAdd
                    onClick={() => {
                      if (count < product.so_luong) {
                        this.setState({ count: count + 1 });
                      } else {
                        this.setState({ count: product.so_luong });
                      }
                    }}
                  />
                </div>
                <button className="Button" onClick={() => this.props.onAdd(this.addToCart(count, chooseColor))}>
                  <BsHandbagFill style={{ marginRight: "7px" }} />
                  ADD TO CART
                </button>
                <button className="Button">
                  <BsFillSuitHeartFill style={{ marginRight: "7px" }} />
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
            {console.log(addCart)}
            {window.localStorage.setItem("products", JSON.stringify(addCart))}
          </div>
        </div>
      );
    }
    return <>{data}</>;
  }
}

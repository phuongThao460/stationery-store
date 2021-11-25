import React from "react";
import { IoMdRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css";
import axios from "axios";



export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      idProduct: document.location.pathname.substring(10),
      product: null,
      count: 1
    };
  }
  componentDidMount() {
    this.getItem();
  }
  async getItem() {
    await axios
      .post("http://localhost:8000/san_pham/", {
        san_pham_id: this.state.idProduct,
      })
      .then((res) => {
        this.setState({ product: res.data });
        console.log(res.data);
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
            <div className="infoContainer" style={{ maxWidth: "570px" }}>
              <h1 className="Title-Product">{this.state.product.ten_sp}</h1>
              <span className="Price">${this.state.product.don_gia_xuat}</span>
              <p className="Desc">{this.state.product.mo_ta}</p>

              <div className="FilterContainer">
                <div className="Filter">
                  <span className="FilterTitle">Color</span>
                  {this.state.product.id_mau_sac.map((item) => (
                    <input
                      type="color"
                      value={item.ten_mau}
                      className="primary-color"
                    />
                  ))}
                </div>
              </div>
              <div className="AddContainer">
                <div className="AmountContainer">
                  <IoMdRemove onClick={() => this.setState({ count: this.state.count - 1 })} />
                  <span className="Amount">{this.state.count}</span>
                  <GrAdd onClick={() => this.setState({ count: this.state.count + 1 })}/>
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
    return <>{data}</>;
  }
}

import React from "react";
// import { IoMdRemove } from "react-icons/io";
// import { GrAdd } from "react-icons/gr";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css";


import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from '../redux/action/productAction';
import { addToCart } from '../redux/action/cartAction';


const Product = ({ match, history }) => {
  const [count, setQty] = useState(1);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    // if (product && match.params.id !== product._id) {
    //   
    // }
    dispatch(getProductDetails(window.location.pathname.substring(10)));
    console.log(productDetails)
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, count));
    navigate(`/cart`);
  };

  return ( 
        <div className="Container-Product">
           {loading ? (
            <h2>Loading...</h2>
            ) : error ? (
            <h2>{error}</h2>
            ) : (
        <>
          <div className="Wrapper">
            <div
              className="ImgContainer"
              style={{ maxWidth: "597px" }}
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
                style={{ maxWidth: "610px", position: "relative" }}
              >
                <h1 className="Title-Product">{product.ten_sp}</h1>
                <div className="stock">
                  {product.so_luong > 0 ? (
                    <span className="in-stock">IN STOCK</span>
                  ) : (
                    <span className="out-stock">OUT OF STOCK</span>
                  )}
                </div>
                <span className="Price">${product.don_gia_xuat}</span>
                
                <p className="Desc">{product.mo_ta}</p>

                <div className="FilterContainer">
                  <div className="Filter">
                    <span className="FilterTitle">Color</span>
                    <div>
                      {product.mau_sac===undefined || product.mau_sac.map((mau) => (
                        <div className="dot" style={{ backgroundColor: mau }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="AddContainer">
                <span className="FilterTitle">Qty</span>
                <select value={count} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.so_luong).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                
              </div>
              <div className="btn">
                  <button
                    className="Button"
                    onClick={addToCartHandler}
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
          </div>
          </>
            )}
        </div>
   );
};
export default Product;
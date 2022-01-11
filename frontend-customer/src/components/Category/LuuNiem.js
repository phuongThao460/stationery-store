import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Category/Category.css'
import { Link } from "react-router-dom";

const Souv = () => {
  const [Products, setProducts] = useState(null)

  useEffect(() => {
    getListProduct()
  }, [])

  const getListProduct = () => {
    axios.get("https://stationery-store-tmdt.herokuapp.com/san_pham/6198b68bc43605f17ec8aa43/1").then((res) => {
      setProducts(res.data)
    });
  };

  if (Products === null) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className="Tittle">SOUVENIR</h1>
      <div className="Category">
      {Products.map((product) => {
        return (
          <div className="containerCate">
              <Link to={"/products/" + product._id}>
              <img src={product.hinh_anh} alt="Avatar" className="image"/>
              <div className="overlay">
                <div className="text">{product.ten_sp}</div>
                <div className="price">${product.gia_ban_hien_tai}</div>
              </div>
              </Link>
            </div>
        )
      })}
      </div>
    </>
  )
  
}

export default Souv;

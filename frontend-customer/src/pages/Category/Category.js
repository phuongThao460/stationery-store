import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import "../../style/Homepage.css";

const Category = () => {
  const { category_name } = useParams();
  const [penProducts, setPenProducts] = useState(null)
  const [bookProducts, setBookProducts] = useState(null)

  useEffect(() => {
    getListProduct()
  }, [])

  const getListProduct = () => {
    axios.get("https://stationery-store-tmdt.herokuapp.com/san_pham/6198b68bc43605f17ec8aa41/1").then((res) => {
      setPenProducts(res.data)
    });
    axios.get("https://stationery-store-tmdt.herokuapp.com/san_pham/6198b68bc43605f17ec8aa3f/1").then((res) => {
      setBookProducts(res.data)
    });
  };

  if (penProducts === null || bookProducts === null) {
    return <h1>Loading</h1>
  }

  return (
    <>
      <h1>Pen - Pencil</h1>
      {penProducts.map((product) => {
        return (<p>{product.ten_sp}</p>)
      })}
      <h1>Notebook</h1>
      {bookProducts.map((product) => {
        return (<p>{product.ten_sp}</p>)
      })}
    </>
  )
  
}

export default Category;

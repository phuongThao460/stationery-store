import React, { useEffect, useState } from "react";
import productApi from "../../services/api/productAPI";
import ProductList from "./ProductList";
function GetProduct() {
  const [productsList, setProductsList] = useState([]);

  const fetchProductList = async () => {
    const response = await productApi.getAll();
    setProductsList(response);
  };
  useEffect(() => {
    fetchProductList();
  },[]);

  return (
    <>
      {console.log(productsList)}
    </>
  );
}

export default GetProduct;

import React, { useEffect, useState } from "react";
import productApi from "../../services/api/productAPI";
import ProductList from "./ProductList";
function GetProduct() {
  const [productsList, setProductsList] = useState([]);
  const products = [];

  const fetchProductList = async () => {
    try {
      const response = await productApi.getAll();

      console.log("status: " + response.status);
      setProductsList(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <>
      {productsList.map((item) => products.push(item))}
      <ProductList products={products} />
    </>
  );
}

export default GetProduct;

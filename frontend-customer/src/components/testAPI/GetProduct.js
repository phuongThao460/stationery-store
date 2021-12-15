import React, { useEffect, useState } from "react";
import productApi from "../../services/api/productAPI";
import ProductList from './ProductList'
function GetProduct() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    productApi.getAll().then((res) => setProductsList(res));
  }, []);

  return (
    <>
      {productsList.map((item, index) => (
          <ProductList products={item.ten_sp}/>
        ))}
      
    </>
  );
}

export default GetProduct;

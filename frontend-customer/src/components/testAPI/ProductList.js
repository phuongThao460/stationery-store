import React from 'react'

function ProductList(props) {
  const { products } = props;
  return (
    <div>
      <p>{console.log(products)}</p>
    </div>
  )
}

export default ProductList

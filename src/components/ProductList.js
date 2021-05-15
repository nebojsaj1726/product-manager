import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const deleteProductHandler = (id) => {
    props.getProductId(id);
  };

  const renderProductList = props.products.map((product) => {
    return (
      <ProductCard
        product={product}
        clickHandler={deleteProductHandler}
        key={product.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Product List
        <Link to="/add">
          <button className="ui button blue right">Add Product</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderProductList}</div>
    </div>
  );
};

export default ProductList;

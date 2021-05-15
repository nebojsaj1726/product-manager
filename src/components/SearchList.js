import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const SearchList = (props) => {
  const deleteProductHandler = (id) => {
    props.getProductId(id);
  };

  const renderSearchList = props.products.map((product) => {
    return (
      <ProductCard
        product={product}
        clickHandler={deleteProductHandler}
        key={product.id}
      />
    );
  });

  return (
    <div className="main searched">
      <div className="ui celled list">{renderSearchList}</div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Product List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchList;

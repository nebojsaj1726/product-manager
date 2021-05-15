import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = (props) => {
  const { name, description, price } = props.location.state.product;

  return (
    <div className="main detail">
      <div className="ui card left" style={{ margin: "50px 0" }}>
        <div className="content product-detail">
          <div className="header">{name}</div>
          <div className="description" style={{ margin: "20px 0" }}>
            {description}
          </div>
          <div>{price}$</div>
        </div>
      </div>
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

export default ProductDetail;

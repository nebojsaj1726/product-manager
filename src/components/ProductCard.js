import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, name, description, price } = props.product;

  return (
    <div className="item">
      <div className="content products">
        <Link
          to={{
            pathname: `/product/${id}`,
            state: { product: props.product },
          }}
        >
          <div className="header text-field">{name}</div>
        </Link>
        <div className="text-field-desc">{description}</div>
        <div className="text-field">{price}$</div>
        <div className="icons">
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginLeft: "5px" }}
            onClick={() => props.clickHandler(id)}
          ></i>
          <Link to={{ pathname: `/edit`, state: { product: props.product } }}>
            <i
              className="edit alternate outline icon"
              style={{ color: "royalblue" }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

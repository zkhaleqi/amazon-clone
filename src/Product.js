import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon></StarIcon>
              ))}
          </p>
        </div>
      </div>
      <img src={image} className="asdf"></img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

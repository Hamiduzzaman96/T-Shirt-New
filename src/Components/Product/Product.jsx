import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, image, price, quantity, Category } = props.product;
  const handleAddTOCart = props.handleAddTOCart;

  return (
    <div className="product">
      {<img src={image} alt="" />}
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {Category}</p>
      <button onClick={() => handleAddTOCart(props.product)} className="button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

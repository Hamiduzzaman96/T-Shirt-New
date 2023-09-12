import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let TotalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    TotalShipping = TotalShipping + product.shipping;
  }
  return (
    <div className="cart">
      <p className="order">Order Summary</p>
      <p>
        Selected Items: <span className="span">{cart.length}</span>
      </p>
      <p>
        Total Price: $ <span className="span">{total}</span>
      </p>
      <p>
        Total Shipping: <span className="span">{TotalShipping}</span>{" "}
      </p>
      <br />
      <p>Grand Total:</p>
    </div>
  );
};

export default Cart;

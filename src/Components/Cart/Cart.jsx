import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let TotalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;

    TotalShipping = TotalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + tax;
  return (
    <div className="cart">
      <p className="order">Order Summary</p>
      <p>
        Selected Items: <span className="span">{cart.length}</span>
      </p>
      <p>
        Total Price: <span className="span">${totalPrice}</span>
      </p>
      <p>
        Total Shipping: <span className="span">{TotalShipping}</span>{" "}
      </p>
      <p>
        Tax: <span className="span">${tax}</span>
      </p>
      <br />
      <p>
        Grand Total: <span className="span"> ${grandTotal}</span>
      </p>
    </div>
  );
};

export default Cart;

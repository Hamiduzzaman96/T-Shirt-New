import React, { useEffect, useState } from "react";

import "./home.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddTOCart = (product) => {
    const newProduct = [...cart, product];
    setCart(newProduct);
  };

  useEffect(() => {
    fetch("tshirt.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="home-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddTOCart={handleAddTOCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

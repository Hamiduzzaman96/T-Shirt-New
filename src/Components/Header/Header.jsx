import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="t-shirt">
        <h3>T-Shirt</h3>
      </div>
      <div className="search">
        <input type="text" placeholder="Search your product" />
      </div>
      <nav>
        <ul>
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="contact">
            Contact
          </Link>
          <Link className="a" to="about">
            About
          </Link>
          <Link className="a" to="summary">
            Summary
          </Link>
        </ul>
      </nav>
    </div>
  );
}

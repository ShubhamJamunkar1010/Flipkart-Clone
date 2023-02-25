import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <div className="navbar">
        <div>
          <NavLink to="/" className="logo">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
              alt="logo"
            />
          </NavLink>
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <BsSearch color="blue" size={18} style={{ margin: "8px" }} />
        </div>
        <div className="home">
          <NavLink to="/" className="nav-items">
            Home
          </NavLink>
        </div>
        <div className="products">
          <NavLink to="/products" className="nav-items">
            Products
          </NavLink>
        </div>
        <div className="more">
          <NavLink className="nav-items">Login</NavLink>
        </div>
        <div className="cart">
          <div>
            <BsCart size={18} />
          </div>
          <NavLink to="/cart" className="nav-items">
            Cart ({state.length})
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

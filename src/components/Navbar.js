import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart, BsSearch } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

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
        <div className="home resp">
          <NavLink to="/" className="nav-items">
            Home
          </NavLink>
        </div>
        <div className="products resp">
          <NavLink to="/products" className="nav-items">
            Products
          </NavLink>
        </div>

        <div className="more resp">
          {isAuthenticated ? (
            <NavLink to="/">
              <button
                className="nav-items logout-btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/">
              <button
                className="nav-items logout-btn"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </NavLink>
          )}
        </div>
        <div className="cart resp">
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

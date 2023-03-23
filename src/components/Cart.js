import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import "./Cart.css";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const emptyCart = () => {
    return <h3 className="emptyCart">Your Cart is Empty</h3>;
  };

  const cartItems = (product) => {
    return (
      <div>
        <div className="cart-products">
          <div className="p-image">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="p-details">
            <h3 className="p-title">{product.title}</h3>
            <p className="p-price">
              {product.qty} X ${product.price} = ${(product.qty * product.price).toFixed(2)}
              <p>GST = {((product.qty * product.price) / 15).toFixed(2)} </p>
              <p>
                Total = $
                {(
                  product.qty * product.price +
                  (product.qty * product.price) / 15
                ).toFixed(2)}{" "}
              </p>
            </p>
            <button className="p-btn1" onClick={() => handleDel(product)}>
              <i className="fa fa-minus"></i>
            </button>
            <button className="p-btn2" onClick={() => handleAdd(product)}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="C-btn">
          {isAuthenticated ? (
            <NavLink to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </NavLink>
          ) : (
            <div className="checkout-btn" onClick={() => loginWithRedirect()}>
              Proceed to Checkout
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;


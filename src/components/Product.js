import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
   
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
     
    };
    getProduct();
  }, []);

 
  const ShowProduct = () => {
    return (
      <>
        <div className="productDetails">
          <div className="left-side">
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="btns">
            
                <button className="addToCart" onClick={() => addProduct(product)}>
                Add to Cart
                </button> 
              
              <button className="buyNow">
                <NavLink className="cart-btn" to="/cart">
                  Go to Cart
                </NavLink>
              </button>
            </div>
          </div>
          <div className="right-side">
            <h5>{product.title}</h5>
            {/* <p style={{width:'80%'}}>{product.description}</p> */}
            <p className="rate">Rating {product.rating && product.rating.rate}★</p>
            <p style={{fontWeight:'bold'}}>${product.price}</p>
            <p style={{fontWeight:'bold'}}>Available offers</p>
            <p>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                height={20}
                alt=""
              />{" "}
              Bank Offer Flat ₹100 Instant Cashback on Paytm Wallet. Min Order
              Value ₹1000. Valid once per Paytm account
            </p>
            <p>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                height={20}
                alt=""
              />{" "}
              Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
              <span className="tc">T&C</span>
            </p>
            <p>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                height={20}
                alt=""
              />{" "}
              Buy this Product and Get Extra ₹500 Off on Two-Wheelers{" "}
              <span className="tc">T&C</span>
            </p>
            <p>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                height={20}
                alt=""
              />{" "}
              Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift
              Card worth up to ₹500* <span className="tc">T&C</span>
            </p>
            <div className="detail">
              <div className="left">
                <p>delivery</p>
                <p>Warranty</p>
                <p>Seller</p>
              </div>
              <div className="right">
                <p>delivery in 3 days | Free</p>
                <p>No Warranty</p>
                <p>ShivanchalExim</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
        <div>
          {/* {loading ? <Loading /> : <ShowProduct />} */}
          <ShowProduct />
        </div>
  );
};

export default Product;

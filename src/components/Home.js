import React from "react";
import "./Home.css";
import Products from "./Products";
import Carousel from "react-bootstrap/Carousel";
import { HashLink } from "react-router-hash-link";

const Home = () => {

  return (
    <>
    
      <div className="category">
        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100"
              alt="grocery"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Grocery</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100"
              alt="mobiles"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Mobiles</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100"
              alt="fashion"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Fashion</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100"
              alt="electronics"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Electronics</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100"
              alt="furnitures"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Furnitures</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100"
              alt="appliances"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Appliances</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100"
              alt="flight & hotels"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Flight & Hotels</HashLink>
          </div>
        </div>

        <div>
          <div className="sub-category-img">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100"
              alt="beauty"
            />
          </div>
          <div className="sub-category-product">
            <HashLink className="cat" smooth to="#products" duration={500}>Beauty</HashLink>
          </div>
        </div>

      </div>

      {/* slider */}
      <div className="slider">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/67e7491bb6947bc7.jpg?q=50"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/139cf181d98cdf97.jpg?q=50"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/96eae9a967233937.jpg?q=50"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Products />
    </>
  );
};

export default Home;

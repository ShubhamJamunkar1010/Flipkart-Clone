import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      setData(await response.clone().json());
      setFilter(await response.json());
    };
    getproducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="ProductsHeading" id="products">
          <div className="main-heading">
            <h1>TRENDING PRODUCTS <span className="resp">ON FLIPKART</span></h1>
          </div>
          <div className="sub-heading">
            <button onClick={() => setFilter(data)}>All</button>
            <button onClick={() => filterProduct("men's clothing")}>
              Men's clothing
            </button>
            <button onClick={() => filterProduct("women's clothing")}>
              Women's clothing
            </button>
            <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
            <button onClick={() => filterProduct("electronics")}>
              Electronics
            </button>
          </div>
        </div>

        <div className="product-list">
          {filter.map((product) => {
            return (
              <>
                <div className="product" key={product.id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt=""
                    height={100}
                  />
                  <div className="product-title">
                    {product.title.substring(0, 12)}...
                  </div>

                  <div className="product-rating">
                    <span className="rate">{product.rating.rate} ★</span>
                    <span className="count">({product.rating.count})</span>
                  </div>
                  <div className="product-price">${product.price}</div>
                  <button className="product-btn">
                    <NavLink className="P-btn" to={`/products/${product.id}`}>
                      View this product
                    </NavLink>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="row justify-content-center">
        <ShowProducts />
      </div>
    </div>
  );
};

export default Products;

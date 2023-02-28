import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import './Cart.css';


const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const emptyCart = () => {
    return (
     
            <h3>Your Cart is Empty</h3>
          
    );
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
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button
                className="p-btn1"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                className="p-btn2"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>  
      </div>
      </div>       
      </div>
      
    );
  };
  const buttons = () => {
    return (
      <div className="C-btn">
            <NavLink
              to="/checkout"
              className="checkout-btn"
            >
              Proceed to Checkout
            </NavLink>
      </div>
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





































// import React, { useRef } from "react";
// import Home from "./Home";
// import "./Login.css";

// function Login() {
//   const email = useRef();
//   const password = useRef();
//   const getEmail = localStorage.getItem("emailData");
//   const getPassword = localStorage.getItem("passwordData");
//   const handleSubmit = () => {
//     if (email.current.value == "shubham" && password.current.value == "1027") {
//       localStorage.setItem("emailData", "shubham");
//       localStorage.setItem("passwordData", "1027");
//     }
//   };

//   return (
//     <div className="loginPage">
//       {getEmail && getPassword ? (
//         <Home />
//       ) : (
//         <form className="form" onSubmit={handleSubmit}>
//           <div>
//             <h1 style={{ color: "white" }}>Login to Flipcart</h1>
//           </div>
//           <div>
//             <input
//               className="email"
//               type="text"
//               placeholder="enter your email"
//               ref={email}
//             />
//           </div>
//           <div>
//             <input
//               className="pass"
//               type="password"
//               placeholder="enter your password"
//               ref={password}
//             />
//           </div>

//           <button className="log-btn">Login</button>
//         </form>
//       )}
//     </div>
//   );
// }
// export default Login;






// Login.className.loginPage{
//     display: flex;
//     flex-direction: column;
//     height: 100vh;
//     background-color: rgb(48, 48, 121);
// }
// .form{
//     display: flex;
//     flex-direction: column;
//     gap: 5vh;
//     align-items: center;
//     justify-content: center;
//     margin-top: 20vh;
// }
// .log-btn{
//     background-color: blue;
//     color: rgb(223, 215, 215);
//     width: 300px;
//     padding: 10px;
//     border: 1px solid blue;
//     font-weight: bold;
// }
// .log-btn:hover{
//     background-color: rgb(66, 66, 234);
// }
// .email{
//     width: 300px;
//     padding: 10px;
// }
// .pass{
//     width: 300px;
//     padding: 10px;
// }
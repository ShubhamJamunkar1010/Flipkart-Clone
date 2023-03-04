import React from "react";
import "./Checkout.css";
import { NavLink } from "react-router-dom";

export const Checkout = () => {
  return (
    <header>
      <div class="container">
        <div class="left">
          <h3 style={{fontWeight:'bold'}}>BILLING ADDRESS</h3>
          <form>
            Full name <br />
            <input type="text" name="" placeholder="Enter name" /><br />
            Email <br />
            <input type="text" name="" placeholder="Enter email" /><br />
            Address <br />
            <input type="text" name="" placeholder="Enter address" /><br />
            City  <br />
            <input type="text" name="" placeholder="Enter City" /><br />
            <div id="zip">
              <label className="state">
                State
                <select>
                  <option>Choose State..</option>
                  <option>Maharashtra</option>
                  <option>Hariyana</option>
                  <option>Uttar Pradesh</option>
                  <option>Madhya Pradesh</option>
                </select>
              </label><br />
              <label>
                Pin code <br />
                <input type="number" name="" placeholder="Pin code" />
              </label>
            </div>
          </form>
        </div>
        <div class="right">
          <h3 style={{fontWeight:'bold'}}>PAYMENT</h3>
          <form style={{fontWeight:'bold'}}>
            Accepted Card <br />
            <img src="https://cdn.imgbin.com/24/18/7/imgbin-debit-card-bank-of-america-credit-card-visa-corporate-business-card-s6hG5thjNvaEdHB7EtvmvTkx0.jpg" alt="img" width="50" />
			<img src="https://www.pngplay.com/wp-content/uploads/7/Debit-Card-Transparent-Image.png" alt="img" width="50" />
            <img src="https://png.pngitem.com/pimgs/s/194-1948488_image-union-bank-atm-card-hd-png-download.png" alt="img" width="50" />
            <br />
            <br />
            Credit card number <br />
            <input type="text" name="" placeholder="Enter card number" /><br />
            Exp month <br />
            <input type="text" name="" placeholder="Enter Month" /><br />
            <div id="zip">
              <label className="exp-year">
                Exp year
                <select>
                  <option>Choose Year..</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </label><br />
              <label>
                CVV <br />
                <input type="number" name="" placeholder="CVV" /><br />
              </label>
            </div>
          </form>
		  <NavLink to='/orderPlaced'>
          <input className="checkout-button" type="submit" name="" value="Place Your Order" />
		  </NavLink><br />
        </div>
      </div>
    </header>
  );
};

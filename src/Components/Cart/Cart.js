import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  let total = 0;
  let ship = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    ship = ship + product.shipping;
  }

  const tax = (total * 0.1).toFixed(2);
  const covtax = +tax;
  const grandTotal = total + ship + covtax;
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Selected Items:{quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping Charge:${ship}</p>
      <p>Tax: ${covtax}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      {props.children}
      <div className="button-container">
        <button className="btn1">Clear Cart</button>
        <Link to="/order">
          <button className="btn2">Review Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

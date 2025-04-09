import React from "react";
import './Cart.css';

const Cart = ({cart}) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="cart">
        {cart.map ((bottol) => (
          <div key={bottol.id}>
            <img src={bottol.img}></img>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Cart;

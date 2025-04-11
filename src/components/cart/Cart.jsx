import React from "react";
import PropTypes from "prop-types";
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cart;
 
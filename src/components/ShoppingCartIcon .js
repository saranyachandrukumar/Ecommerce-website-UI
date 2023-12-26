// ShoppingCartIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './navbaritem.css';


const ShoppingCartIcon = ({ itemCount, onCartClick }) => {
  return (
    <button className="shopping-cart-button" onClick={onCartClick}>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {itemCount > 0 && <span className="cart-item-count">Cart ({itemCount}) </span>}
    </button>
  );
};

export default ShoppingCartIcon;

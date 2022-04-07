import React from 'react';

import './cart-item.styles.css';

const CartItem = ({name, price, amount}) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;

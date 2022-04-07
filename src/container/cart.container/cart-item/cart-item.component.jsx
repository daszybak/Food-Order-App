import React from 'react';

import './cart-item.styles.css';

const CartItem = ({item, onAdd, onRemove}) => {
  const {name, price, amount, id} = item;

  const handleOnAdd = () => {
    onAdd(item);
  };

  const handleOnRemove = () => {
    onRemove(id);
  };

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
        <button onClick={handleOnRemove}>−</button>
        <button onClick={handleOnAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

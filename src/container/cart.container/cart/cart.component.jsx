import React, {useContext} from 'react';

import CartItem from '../cart-item/cart-item.component';

import './cart.styles.css';

const Cart = () => {
  const {items, addItem, removeItem} = useContext(CartContext);

  const handleOnAdd = ({id, name, price, description}) => {
    addItem({
      id,
      name,
      price,
      description,
      amount: 1,
    });
  };

  const handleOnRemove = ({id, name, price, description}) => {
    removeItem({
      id,
      name,
      price,
      description,
      amount: 1,
    });
  };

  const renderedCartItems = items.map((item) => {
    return (
      <CartItem item={item} onAdd={handleOnAdd} onRemove={handleOnRemove} />
    );
  });

  return (
    <>
      <ul className="cart-items">{renderedCartItems}</ul>
      <div className="total">
        <p>Total Amount</p>
        <p>Price</p>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button>Order</button>
      </div>
    </>
  );
};

export default Cart;

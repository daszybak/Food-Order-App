import React from 'react';

const CartContext = React.createContext({
  items: [],
  amount: 0,
  itemsAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;

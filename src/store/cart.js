import React from 'react';

const Cart = React.createContext({
  items: [],
  amount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default Cart;

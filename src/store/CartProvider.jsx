import {useReducer} from 'react';
import Cart from './cart';

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    if (!state.items)
      return {
        items: [{...action.value, amount: 1}],
        amount: 1,
      };
    const item = state.items.find((item) => item.id === action.value.id);
    if (!item) {
      return {
        items: [...state.items, {...action.value, amount: 1}],
        amount: state.amount++,
      };
    } else {
      item.amount++;
      return;
    }
  }
};

const CartProvider = ({children}) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    defaultCartState,
  });

  const handleAddItem = (item) => {
    dispatchCart({type: 'ADD_ITEM', value: item});
  };

  const handleRemoveItem = (item) => {
    dispatchCart({type: 'REMOVE_ITEM', value: item});
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.amount,
    addItem: handleAddItem,
    deleteItem: handleRemoveItem,
  };

  return <Cart.Provider value={cartContext}>{children}</Cart.Provider>;
};

export default CartProvider;

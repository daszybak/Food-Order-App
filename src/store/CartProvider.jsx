import {useReducer} from 'react';
import CartContext from './cart';

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  let updatedItem;
  let updatedItems;
  let updatedTotalAmount;
  const id = action.id ?? action.value.id;
  const itemIndex = state.items.findIndex((item) => item.id === id);
  if (action.type === 'ADD_ITEM') {
    if (itemIndex > -1) {
      updatedTotalAmount =
        state.amount + action.value.price * action.value.amount;
      updatedItem = {
        ...state.items[itemIndex],
        amount:
          Number(state.items[itemIndex].amount) + Number(action.value.amount),
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items];
      updatedItems.push(action.value);
    }
  } else if (action.type === 'REMOVE_ITEM') {
    updatedTotalAmount =
      state.amount - action.value.price * action.value.amount;
    if (itemIndex > -1) {
      updatedItem = {
        ...state.items[itemIndex],
        amount:
          action.value.amount > state.items[itemIndex].amount
            ? 0
            : state.items[itemIndex].amount - action.value.amount,
      };
      updatedItems = {
        ...state.items,
      };
      updatedItems[itemIndex] = updatedItem;
    }
  }
  console.log(updatedItems);
  return {
    items: updatedItems,
    amount: updatedTotalAmount,
  };
};

const CartProvider = ({children}) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

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
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

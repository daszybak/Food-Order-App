import {useReducer} from 'react';
import CartContext from './cart';

const defaultCartState = {
  items: [],
  amount: 0,
  itemsAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItem;
  let updatedItems;
  let updatedTotalAmount;
  let updatedItemsAmount;

  const id = action.value?.id ?? action.value;

  const itemIndex = state.items?.findIndex((item) => item.id === id) ?? -1;
  if (action.type === 'ADD_ITEM') {
    if (itemIndex > -1) {
      console.log('add state.amount', state.amount);
      updatedTotalAmount =
        Number(state.amount) + Number(action.value.price * action.value.amount);
      updatedItemsAmount =
        Number(state.itemsAmount) + Number(action.value.amount);
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
      updatedTotalAmount = action.value.price * action.value.amount;
      updatedItemsAmount = action.value.amount;
    }
  } else if (action.type === 'REMOVE_ITEM') {
    console.log(state.amount);
    console.log(itemIndex);
    if (itemIndex > -1) {
      updatedItem = {
        ...state.items[itemIndex],
        amount: Number(state.items[itemIndex].amount - 1),
      };
      if (updatedItem.amount < 1) {
        updatedItems = state.items.filter((item) => {
          return item.id !== id;
        });
      } else {
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      }
      updatedTotalAmount = state.amount - state.items[itemIndex].price;
      updatedItemsAmount = state.itemsAmount - 1;
    }
  }

  return {
    items: updatedItems,
    amount: updatedTotalAmount,
    itemsAmount: updatedItemsAmount,
  };
};

const CartProvider = ({children}) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const handleAddItem = (item) => {
    dispatchCart({type: 'ADD_ITEM', value: item});
  };

  const handleRemoveItem = (id) => {
    dispatchCart({type: 'REMOVE_ITEM', value: id});
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.amount,
    itemsAmount: cartState.itemsAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

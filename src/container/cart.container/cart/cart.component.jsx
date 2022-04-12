import React, {useContext, useState} from 'react';

import CartItem from '../cart-item/cart-item.component';
import CartContext from '../../../store/cart';

import './cart.styles.css';
import ModalContext from '../../../store/modal-context';
import Checkout from '../../checkout.container/checkout.component';

const Cart = () => {
  const {items, amount, addItem, removeItem} = useContext(CartContext);
  const {modalState, setModalState} = useContext(ModalContext);
  const [checkout, setCheckout] = useState(false);

  const handleOnAdd = ({id, name, price, description}) => {
    addItem({
      id,
      name,
      price,
      description,
      amount: 1,
    });
  };

  const handleOnRemove = (id) => {
    removeItem(id);
  };

  console.log('items u items.map ', items);

  const renderedCartItems = items.map((item) => {
    return (
      <CartItem
        item={item}
        onAdd={handleOnAdd}
        onRemove={handleOnRemove}
        key={item.id}
      />
    );
  });

  const handleOnClickCloseModal = () => {
    if (modalState) setModalState(false);
  };

  const handleOnClickOpenCheckout = () => {
    setCheckout(true);
  };

  const handleOnClickCloseCheckout = () => {
    setCheckout(false);
  };

  return (
    <>
      {!checkout && (
        <>
          <ul className="cart-items">{renderedCartItems}</ul>
          <div className="total">
            <p>Total Amount</p>
            <p>${amount.toFixed(2)}</p>
          </div>
          <div className="actions">
            <button className="button--alt" onClick={handleOnClickCloseModal}>
              Close
            </button>
            <button onClick={handleOnClickOpenCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      {checkout && (
        <Checkout
          closeModal={handleOnClickCloseCheckout}
          amount={amount}
          items={items}
        />
      )}
    </>
  );
};

export default Cart;

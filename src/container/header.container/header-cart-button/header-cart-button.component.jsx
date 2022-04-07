import React from 'react';

import './header-cart-button.styles.css';

import {Modal} from './../../../components';
import CartModal from './../../cart.container/cart/cart.component';
import {IoCart} from 'react-icons/io5';
import {useContext} from 'react';
import CartContext from '../../../store/cart';
import ModalContext from '../../../store/modal-context';

const HeaderCartButton = () => {
  const {modalState, setModalState} = useContext(ModalContext);
  const {itemsAmount} = useContext(CartContext);

  const openModal = () => {
    if (!modalState) setModalState(true);
  };

  return (
    <>
      <button className="button" onClick={openModal}>
        <span>
          <IoCart className="icon" />
        </span>
        <span> Your Cart </span>
        <span className="badge">{itemsAmount}</span>
        {modalState && (
          <Modal setModalState={setModalState}>
            <CartModal />
          </Modal>
        )}
      </button>
    </>
  );
};

export default HeaderCartButton;

import React from 'react';

import './header-cart-button.styles.css';

import {Modal} from './../../../components';
import {IoCart} from 'react-icons/io5';
import {useState} from 'react';

const HeaderCartButton = () => {
  const [modalState, setModalState] = useState(false);

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
        <span className="badge">0</span>
        {modalState && <Modal setModalState={setModalState} />}
      </button>
    </>
  );
};

export default HeaderCartButton;

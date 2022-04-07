import React, {useRef} from 'react';
import {createPortal} from 'react-dom';

import './modal.styles.css';

const Modal = ({setModalState, children}) => {
  const backdropRef = useRef();

  const handleModalState = (event) => {
    if (backdropRef.current && event.target === backdropRef.current)
      setModalState(false);
  };

  return createPortal(
    <div className="backdrop" ref={backdropRef} onClick={handleModalState}>
      <div className="modal">{children}</div>
    </div>,
    document.querySelector('#root')
  );
};

export default Modal;

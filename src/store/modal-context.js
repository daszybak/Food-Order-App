import React from 'react';

const ModalContext = React.createContext({
  modalState: false,
  setModalState: () => {},
});

export default ModalContext;

import React, {useState} from 'react';

import CheckoutContext from './checkout-context';

const CheckoutProvider = ({children}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const initialContext = {
    checkoutModalOpen: modalOpen,
    setCheckoutModal: setModalOpen,
  };

  return (
    <CheckoutContext.Provider value={initialContext}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;

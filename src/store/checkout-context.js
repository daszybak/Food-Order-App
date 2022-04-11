import React from 'react';

const CheckoutContext = React.createContext({
  checkoutModalOpen: false,
  setCheckoutModal: () => {},
});

export default CheckoutContext;

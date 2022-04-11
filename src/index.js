import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {CartProvider, ModalProvider, CheckoutProvider} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CheckoutProvider>
    <ModalProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ModalProvider>
  </CheckoutProvider>
);

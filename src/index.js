import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import CartProvider from './store/CartProvider';
import ModalProvider from './store/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ModalProvider>
);

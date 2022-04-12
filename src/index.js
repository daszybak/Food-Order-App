import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {CartProvider, ModalProvider} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ModalProvider>
);

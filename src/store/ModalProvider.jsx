import {useState} from 'react/';
import ModalContext from './modal-context';

const ModalProvider = ({children}) => {
  const [modalState, setModalState] = useState(false);

  const modalCtxt = {
    modalState,
    setModalState,
  };

  return (
    <ModalContext.Provider value={modalCtxt}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;

import { ReactNode, MouseEvent, useRef } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../../icons/CloseIcon';
import styles from './Modal.module.css';

interface Props {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  closeHandler: () => void;
}

const Modal = ({ isOpen, title, children, closeHandler }: Props) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = e.target as HTMLDivElement | HTMLButtonElement;

    if (
      target === backgroundRef.current ||
      target.closest('button') === closeRef.current
    ) {
      closeHandler();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div ref={backgroundRef} className={styles.overlay} onClick={closeModal}>
      <div className={styles.content}>
        <div className={styles.nav}>
          <h2>{title}</h2>
          <button ref={closeRef} type='button' onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;

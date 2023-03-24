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
  const closeRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (
      target === backgroundRef.current ||
      target.closest('div') === closeRef.current
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
          <div ref={closeRef} className={styles.button} onClick={closeModal}>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;

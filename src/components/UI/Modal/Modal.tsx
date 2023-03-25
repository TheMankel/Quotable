import { ReactNode, MouseEvent, useRef } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../../icons/CloseIcon';
import { CloseBtn, Content, NavModal, Overlay } from './Modal.style';

interface Props {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  closeHandler: () => void;
}

const Modal = ({ isOpen, title, children, closeHandler }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (
      target === overlayRef.current ||
      target.closest('div') === closeRef.current
    ) {
      closeHandler();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef} onClick={closeModal}>
      <Content>
        <NavModal>
          <h2>{title}</h2>
          <CloseBtn ref={closeRef} onClick={closeModal}>
            <CloseIcon />
          </CloseBtn>
        </NavModal>
        {children}
      </Content>
    </Overlay>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;

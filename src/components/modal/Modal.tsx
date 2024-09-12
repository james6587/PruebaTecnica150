import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import './Modal.scss';
import 'animate.css';

interface ModalProps {
  open: boolean;
  onClick: () => void;
}
const Modal = ({ open, onClick }: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className="modal-dialog animate__animated animate__fadeIn animate__slower"
      ref={ref}
    >
      <div className="modal">
        <img
          onClick={() => {
            onClick();
          }}
          className="modal__close"
          src="../../public/img/Close.png"
          alt="close-img"
        />
        <img
          className="modal__img"
          src="../../public/img/prize-img/prize1.png"
          alt="priceimg"
        />
        <h1 className="modal__title">NETFLIX POR 1 MES</h1>
        <p className="modal__text">
          Tienes una licencia de Netflix por un mes para disfrutar de tus series
          y películas favoritas.
        </p>
        <Button onClick={() => {}} />
      </div>
    </dialog>
  );
};

export default Modal;

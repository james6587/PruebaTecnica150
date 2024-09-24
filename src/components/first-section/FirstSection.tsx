import { useState } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import PrizeCards from '../price-cards/PrizeCards';
import './FirstSection.scss';
import 'animate.css';

const FirstSection = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal
        open={openModal}
        onClick={() => {
          setOpenModal(false);
        }}
      />
      <div className="section1">
        <div className="section1__text1">
          <h1 className="section1__text1__title showDesktop animate__animated animate__fadeIn animate__slower">
            ¡Desbloquea el mundo con tus notas!
          </h1>
          <p className="section1__text1__desc showDesktop animate__animated animate__fadeIn animate__slower">
            Porque ahora tus notas son premios.
          </p>
          <h1 className="section1__text1__title showMobile animate__animated animate__fadeIn animate__slower">
            ¡gana subiendo TUS buenas notas!
          </h1>
          <p className="section1__text1__desc showMobile animate__animated animate__fadeIn animate__slower">
            Participa con tus notas y con los códigos que encontrarás bajo las
            tapas y haz de tu regreso a clases una experiencia increíble.
          </p>
          <div className="section1-button">
            <Button onClick={() => setOpenModal(true)} />
          </div>
        </div>
        <div className="section1__text2 animate__animated animate__fadeIn animate__slower">
          <div className="text2-img">
            <img
              className="section1__text2__img"
              src="../img/conoce.png"
              alt=""
            />
          </div>

          <PrizeCards />
        </div>
      </div>
    </>
  );
};

export default FirstSection;

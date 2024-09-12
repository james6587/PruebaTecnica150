import Button from '../button/Button';
import Steps from '../step/Steps';
import './SecondSection.scss';
import 'animate.css';

const SecondSection = () => {
  return (
    <div className="section2">
      <div className="section2__how-works animate__animated animate__fadeIn animate__slower">
        <div className="how-works-img"></div>
      </div>
      <div className="section2__tabs">
        <div className="tab animate__animated animate__fadeIn animate__slower animate__delay-1s">
          <p className="tab__tab-text">requisitos</p>
          <div className="tab__tab-underline"></div>
        </div>
        <div className="tab animate__animated animate__fadeIn animate__slower animate__delay-2s">
          <p className="tab__tab-text">Dinámica</p>
          <div className="tab__tab-underline"></div>
        </div>
        <div className="tab animate__animated animate__fadeIn animate__slower animate__delay-3s">
          <p className="tab__tab-text">Sistema de puntos</p>
          <div className="tab__tab-underline"></div>
        </div>
      </div>
      <div className="section2__requirements animate__animated animate__fadeIn animate__slower">
        <div className="board">
          <h1 className="board__board-title">
            PARA PARTICIPAR SOLO DEBES CUMPLIR CON ESTOS REQUISITOS
          </h1>
          <Steps />
          <div className="board__button">
            <Button onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

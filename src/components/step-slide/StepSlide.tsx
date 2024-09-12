import { Step } from '../../models/step.model';
import './StepSlide.scss';
import 'animate.css';

interface StepSlideProps {
  step: Step;
}

export function StepSlide({ step }: StepSlideProps) {
  return (
    <div className="step animate__animated animate__fadeIn animate__slower">
      <img className="step__img" src={step.image} alt="step" />
      <div className="step__copy">
        <h1 className="title">{step.name}</h1>
        <p className="desc">{step.description}</p>
      </div>
    </div>
  );
}

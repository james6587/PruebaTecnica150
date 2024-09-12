import './Button.scss';
import 'animate.css';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="button animate__animated animate__fadeInUp animate__slower"
      onClick={onClick}
    >
      ¡registrese aquí!
    </button>
  );
};

export default Button;

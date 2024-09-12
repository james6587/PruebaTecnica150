import './prizeCard.scss';

interface PrizeCardProps {
  prize: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const PrizeCard = ({ prize }: PrizeCardProps) => {
  return (
    <div className="card">
      <div className="card__flex">
        <img className="card-img" src={prize.image} alt="prizeimg" />
        <div className="card-copy">
          <h1 className="card-copy__title">{prize.name}</h1>
          <p className="card-copy__desc">{prize.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;

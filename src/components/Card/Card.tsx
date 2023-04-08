import { FC } from 'react';
import { Character } from 'types/Character';
import styles from './Card.module.css';

interface CardItemsProps {
  card: Character;
}

const Card: FC<CardItemsProps> = ({ card }) => {
  const { id, name, status, species, type, gender, origin, location, image, created } = card;

  return (
    <div className={`${styles.card}`}>
      <img src={image} className={styles.resized} />
      <h3>{name}</h3>
      <p>
        Status:{status} <br />
        Type:{type} <br />
        Gender:{gender} <br />
        Species:{species} <br />
        Origin:{origin.name} <br />
        Location:{location.name} <br />
        {/* Created:{created} */}
      </p>
    </div>
  );
};

export default Card;

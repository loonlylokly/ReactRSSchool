import { FC } from 'react';
import { Character } from 'types/Character';
import styles from './Card.module.css';

interface CardItemsProps {
  card: Character;
  onClick: (id: number) => void;
  popup?: boolean;
}

const Card: FC<CardItemsProps> = ({ card, onClick, popup }) => {
  const { id, name, status, species, type, gender, origin, location, image, created } = card;

  return (
    <div
      className={`${styles.card}`}
      onClick={() => {
        onClick(id);
      }}
    >
      <img src={image} className={styles.resized} />
      <h3>{name}</h3>
      <p className={styles.cardText}>
        Status:{status} <br />
        Type:{type} <br />
        Gender:{gender} <br />
        Species:{species} <br />
        Origin:{origin?.name} <br />
        Location:{location?.name} <br />
        <span className={styles.green}>{popup && `Created:${created}`}</span>
      </p>
    </div>
  );
};

export default Card;

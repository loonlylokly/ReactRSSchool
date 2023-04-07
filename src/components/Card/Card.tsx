import { FC } from 'react';
import { ICard } from '../../types/ICard';
import styles from './Card.module.css';

interface CardItemsProps {
  card: ICard;
}

const Card: FC<CardItemsProps> = ({ card }) => {
  const { title, description, type, availability, image, special } = card;

  return (
    <div className={`${styles.card}`}>
      <img src={image} className={styles.resized} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Type:{type}</p>
      <p>Availability:{availability}</p>
      <p>Special:{special}</p>
    </div>
  );
};

export default Card;

import React from 'react';
import { ICard } from '../../types/ICard';
import styles from './Card.module.css';

interface CardItemsProps {
  card: ICard;
}

class Card extends React.Component<CardItemsProps> {
  render() {
    const { title, description, type, availability, image, special } = this.props.card;

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
  }
}

export default Card;

import React from 'react';
import { ICard } from '../../types/ICard';
import styles from './Card.module.css';

interface CardItemsProps {
  card: ICard;
}

class Card extends React.Component<CardItemsProps> {
  render() {
    const { title, description, image } = this.props.card;

    return (
      <div className={`${styles.card}`}>
        <img src={image} className={styles.resized} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

// import { FC } from 'react';
// import { ICard } from '../../types/ICard';
// import styles from './Card.module.css';

// interface CardItemsProps {
//   card: ICard;
// }

// const Card: FC<CardItemsProps> = ({ card }) => {
//   return (
//     <div className={`${styles.card}`}>
//       <img src={card.image} className={styles.resized} />
//       <h3>{card.title}</h3>
//       <p>{card.description}</p>
//     </div>
//   );
// };

export default Card;

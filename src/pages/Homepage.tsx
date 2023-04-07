import Search from '../components/Search/Search';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import { myCards } from '../data';
import { ICard } from '../types/ICard';
import Card from '../components/Card/Card';

const Homepage = () => {
  return (
    <>
      <Search />
      <List
        classNameList={styles.cards__list}
        items={myCards}
        renderItem={(card: ICard) => <Card key={card.id} card={card} />}
      />
    </>
  );
};

export default Homepage;

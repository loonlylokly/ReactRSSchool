import Search from '../components/Search/Search';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import Card from '../components/Card/Card';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { Character } from 'types/Character';

const Homepage = () => {
  console.log('render');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log('useEffect');
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.info.pages);
        setPages(Array.from(Array(data.info.pages).keys()));
        setCharacters(data.results);
      });
  }, []);

  return (
    <>
      <Search />
      <List
        classNameList={styles.cards__list}
        items={characters}
        renderItem={(card: Character) => <Card key={card.id} card={card} />}
      />
      <Pagination
        className={styles.pagination}
        count={pages.length}
        size="large"
        showFirstButton
        showLastButton
      />
    </>
  );
};

export default Homepage;

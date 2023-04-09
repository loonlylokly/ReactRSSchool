import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import Card from '../components/Card/Card';
import { Pagination, PaginationItem } from '@mui/material';
import { Character } from 'types/Character';

const URL = 'https://rickandmortyapi.com/api/';

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState(searchParams.get('name') || '');
  const [pageQty, setPageQty] = useState(0);
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '') || 1);

  useEffect(() => {
    fetch(`${URL}/character/?name=${query}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPageQty(data.info.pages);
        setCharacters(data.results);

        if (data.info.pages < page) {
          setPage(1);
        }
      });
  }, [query, page]);

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
        count={pageQty}
        page={page}
        size="large"
        onChange={(_, num) => setPage(num)}
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem component={Link} to={`/?page=${item.page}`} {...item} />
        )}
      />
    </>
  );
};

export default Homepage;

import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import Card from '../components/Card/Card';
import { Dialog, Pagination, PaginationItem } from '@mui/material';
import { Character } from 'types/Character';
import Loading from '../components/Loading/Loading';

const URL = 'https://rickandmortyapi.com/api/';

const Homepage = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState(searchParams.get('name') || '');
  const [pageQty, setPageQty] = useState(0);
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '') || 1);
  const [activeCardId, setActiveCardId] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (id: number) => {
    setActiveCardId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(setActiveCardId, 300, 0);
  };

  useEffect(() => {
    fetch(`${URL}/character/?name=${query}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.info.count > 0) {
          setPageQty(data.info.pages);
          setCharacters(data.results);
        }

        if (data.info.pages < page) {
          setPage(1);
        }
      })
      .catch(() => {
        console.log('error');
        setPageQty(1);
        setCharacters([]);
      });
  }, [query, page]);

  useEffect(() => {
    if (activeCardId) {
      setOpen(true);
    }
  }, [activeCardId]);

  return (
    <>
      <Search
        submitMethod={(data: string) => {
          setQuery(data);
          setPage(1);
        }}
      />
      {!characters.length ? (
        <Loading />
      ) : (
        <List
          classNameList={styles.cards__list}
          items={characters}
          renderItem={(card: Character) => <Card key={card.id} card={card} onClick={handleClick} />}
        />
      )}
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
      <Dialog open={open} onClose={handleClose}>
        <Card
          card={characters.find((item) => item.id === activeCardId) || characters[0]}
          onClick={() => {}}
        />
      </Dialog>
    </>
  );
};

export default Homepage;

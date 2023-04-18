import { useState } from 'react';
import Search from '../components/Search/Search';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import Card from '../components/Card/Card';
import { Dialog, Pagination } from '@mui/material';
import { Character } from 'types/Character';
import Loading from '../components/Loading/Loading';
import { useGetCharacterQuery } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { searchSlice } from '../store/searchSlice';

const Homepage = () => {
  const [activeCardId, setActiveCardId] = useState(0);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { saveSearch } = searchSlice.actions;
  const searchText = useAppSelector((state) => state.search.searchText);
  const page = useAppSelector((state) => state.search.page);
  const { data = { info: { pages: 1 }, results: [] }, isLoading } = useGetCharacterQuery({
    query: searchText,
    page: page,
  });
  console.log('render', data.info, open, searchText, page);

  const handleClick = (id: number) => {
    setOpen(true);
    setActiveCardId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(setActiveCardId, 300, 0);
  };

  return (
    <>
      <Search />
      {isLoading ? (
        <Loading />
      ) : (
        <List
          classNameList={styles.cards__list}
          items={data.results || []}
          renderItem={(card: Character) => (
            <Card key={card.id} card={card} onClick={handleClick} popup={false} />
          )}
        />
      )}
      <Pagination
        className={styles.pagination}
        count={data.info.pages}
        page={page}
        size="large"
        onChange={(_, num) => dispatch(saveSearch({ searchText: searchText, page: num }))}
        showFirstButton
        showLastButton
      />
      <Dialog open={open} onClose={handleClose}>
        <Card
          card={data?.results.find((item) => item.id === activeCardId) || data?.results[0]}
          onClick={() => {}}
          popup={true}
        />
      </Dialog>
    </>
  );
};

export default Homepage;

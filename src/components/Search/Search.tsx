import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import React, { useEffect, useRef } from 'react';
import { searchSlice } from '../../store/searchSlice';
import styles from './Search.module.css';

const Search = () => {
  const searchRef = useRef<string>();
  const dispatch = useAppDispatch();
  const { saveSearch } = searchSlice.actions;
  const searchText = useAppSelector((state) => state.search.searchText);

  const onSubmit = (e: React.FormEvent) => {
    dispatch(saveSearch({ searchText: searchRef.current, page: 1 }));
    e.preventDefault();
  };

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    searchRef.current = e.target.value;
  };

  useEffect(() => {
    return function () {
      dispatch(saveSearch({ searchText: searchRef.current, page: 1 }));
    };
  }, [dispatch, saveSearch]);

  return (
    <div className={`${styles.wrapper}`}>
      <form className={`${styles.form}`} onSubmit={onSubmit}>
        <input
          className={`${styles.input}`}
          type="search"
          id="site-search"
          defaultValue={searchText || ''}
          onChange={onValueChange}
        />
        <button className={`${styles.button}`} type="submit">
          <span className={`material-symbols-outlined`}>search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;

import React, { FC, useEffect, useRef } from 'react';
import styles from './Search.module.css';

type SearchProps = {
  submitMethod: (data: string) => void;
};

const Search: FC<SearchProps> = ({ submitMethod }) => {
  const searchRef = useRef<string>();

  const onSubmit = (e: React.FormEvent) => {
    submitMethod(searchRef.current || '');
    e.preventDefault();
  };

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    searchRef.current = e.target.value;
  };

  useEffect(() => {
    searchRef.current = localStorage.getItem('search') || '';
    submitMethod(searchRef.current || '');

    return function () {
      localStorage.setItem('search', searchRef.current || '');
    };
  }, [submitMethod]);

  return (
    <div className={`${styles.wrapper}`}>
      <form className={`${styles.form}`} onSubmit={onSubmit}>
        <input
          className={`${styles.input}`}
          type="search"
          id="site-search"
          defaultValue={localStorage.getItem('search') || ''}
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

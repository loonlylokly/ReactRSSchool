import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.css';

const Search = () => {
  const [search, setState] = useState(localStorage.getItem('search') || '');
  const searchRef = useRef<string>();

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  useEffect(() => {
    return function () {
      localStorage.setItem('search', searchRef.current || '');
    };
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <form className={`${styles.form}`}>
        <input
          className={`${styles.input}`}
          type="search"
          id="site-search"
          name="q"
          value={search}
          onChange={onValueChange}
        />
        <button className={`${styles.button}`}>
          <span className={`material-symbols-outlined`}>search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;

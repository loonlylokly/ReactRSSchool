import { FC, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Search.module.css';

type FormData = {
  search: string;
};

type SearchProps = {
  submitMethod: (data: string) => void;
};

const Search: FC<SearchProps> = ({ submitMethod }) => {
  const [search, setState] = useState(localStorage.getItem('search') || '');
  const searchRef = useRef<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    submitMethod(data.search);
    console.log(data);
  };

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
      <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${styles.input}`}
          type="search"
          id="site-search"
          value={search}
          // onChange={onValueChange}
          {...register('search')}
        />
        <button className={`${styles.button}`} type="submit">
          <span className={`material-symbols-outlined`}>search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;

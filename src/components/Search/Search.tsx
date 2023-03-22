import React from 'react';
import styles from './Search.module.css';

interface ISearch {
  search: string;
}

class Search extends React.Component<object, { search: string }> {
  constructor(props: ISearch) {
    super(props);
    this.state = {
      search: localStorage.getItem('search') || '',
    };
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.target.value });
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  render() {
    return (
      <div className={`${styles.wrapper}`}>
        <form className={`${styles.form}`}>
          <input
            className={`${styles.input}`}
            type="search"
            id="site-search"
            name="q"
            value={this.state.search}
            onChange={this.onValueChange}
          />
          <button className={`${styles.button}`}>
            <span className={`material-symbols-outlined`}>search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

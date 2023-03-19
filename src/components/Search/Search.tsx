import React from 'react';
import styles from './Search.module.css';

class Search extends React.Component {
  render() {
    return (
      <div className={`${styles.wrapper}`}>
        <form className={`${styles.form}`}>
          <input className={`${styles.input}`} type="search" id="site-search" name="q" />
          <button className={`${styles.button}`}>
            <span className={`material-symbols-outlined`}>search</span>
          </button>
        </form>
      </div>
    );
  }
}

// import styles from './Search.module.css';

// const Search = () => {
//   return (
//     <div className={`${styles.wrapper}`}>
//       <form className={`${styles.form}`}>
//         <input className={`${styles.input}`} type="search" id="site-search" name="q" />
//         <button className={`${styles.button}`}>
//           <span className={`material-symbols-outlined`}>search</span>
//         </button>
//       </form>
//     </div>
//   );
// }

export default Search;

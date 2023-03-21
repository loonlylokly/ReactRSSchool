import Search from '../components/Search/Search';
import React from 'react';
import List from '../components/List';
import styles from '../styles/Home.module.css';
import myCards from '../data';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <List items={myCards} classNameList={`${styles.cards__list}`} />
      </>
    );
  }
}

// const Homepage = () => {
//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   );
// };

export default Homepage;

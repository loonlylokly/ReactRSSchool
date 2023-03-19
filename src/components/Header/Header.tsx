import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/about-us">
                AboutUs
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/404">
                404
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul className={styles.menu}>
//           <li className={styles.item}><Link  className={styles.link} to='/'>Women</Link></li>
//           <li className={styles.item}><Link  className={styles.link} to='/'>Men</Link></li>
//           <li className={styles.item}><Link  className={styles.link} to='/'>Kids</Link></li>
//           <li className={`${styles.item} ${styles.logo}`}><Link  className={styles.link} to='/'>BAZAR</Link></li>
//           <li className={styles.item}><Link  className={styles.link} to='/create-card/step-1'>Create Card</Link></li>
//           <li className={styles.item}><Link  className={styles.link} to='/about-us'>About Us</Link></li>
//           <li className={styles.item}><Link  className={styles.link} to='/'>Basket</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default Header;

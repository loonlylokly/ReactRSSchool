import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
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
              About Us
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/add-card">
              Add Card
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
};

export default Header;

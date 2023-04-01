import Search from '../components/Search/Search'
import List from '../components/List'
import styles from '../styles/Home.module.css'
import { myCards } from '../data'

const Homepage = () => {
  return (
    <>
      <Search />
      <List items={myCards} classNameList={`${styles.cards__list}`} />
    </>
  )
}

export default Homepage

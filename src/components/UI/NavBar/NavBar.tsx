import Navigation from '../Navigation/Navigation';
import styles from './NavBar.module.css';

const NavBar = () => {
  const pagesUrls = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/api',
      title: 'Api',
    },
  ];
  return (
    <header>
      <nav className={styles.listWrapper}>
        <ul className={styles.list}>
          <Navigation pagesUrls={pagesUrls} />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar';
import styles from './Content.module.css';

const Content = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Content;

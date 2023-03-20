import { Outlet } from 'react-router-dom';
import styles from './Content.module.css';

const Content = () => {
  return (
    <main className={styles.root}>
      <Outlet />
    </main>
  );
};

export default Content;

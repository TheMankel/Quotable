import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Section from '../Section/Section';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <Section id='PageNotFound'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>
          Oops! Looks like you followed a bad link
        </p>
        <NavLink to='/' className={styles.link}>
          <Button title='Home' />
        </NavLink>
      </div>
    </Section>
  );
};

export default NotFound;

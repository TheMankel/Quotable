import { NavLink } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Section from '../Section/Section';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <Section id='PageNotFound'>
      <Heading title='404' subtitle=' Oops! Looks like you followed a bad link'>
        <NavLink to='/' className={styles.link}>
          <button>Home</button>
        </NavLink>
      </Heading>
    </Section>
  );
};

export default NotFound;

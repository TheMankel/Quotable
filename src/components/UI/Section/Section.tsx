import { ReactNode } from 'react';
import styles from './Section.module.css';

type Props = {
  id?: string | undefined;
  children: ReactNode;
};

const Section = ({ id, children }: Props) => {
  return (
    <section className={styles.wrapper} id={id}>
      {children}
    </section>
  );
};

export default Section;

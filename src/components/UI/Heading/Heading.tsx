import { ReactNode } from 'react';

import styles from './Heading.module.css';

type Props = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

const Heading = ({ title, subtitle, children }: Props) => {
  if (!title) return null;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </div>
  );
};

export default Heading;

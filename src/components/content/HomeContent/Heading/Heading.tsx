import styles from './Heading.module.css';

type Props = {
  title?: string;
};

const Heading = ({ title }: Props) => {
  if (!title) return null;

  return (
    <header className={styles.title}>
      <h1>{title}</h1>
    </header>
  );
};

export default Heading;

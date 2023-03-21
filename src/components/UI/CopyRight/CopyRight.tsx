import { NavLink } from 'react-router-dom';
import styles from './CopyRight.module.css';

type Props = {
  authors: {
    name: string;
    url: string;
  }[];
};

const CopyRight = ({ authors }: Props) => {
  const links = authors.map((author, i) => (
    <NavLink key={i} to={author.url} target='_blank' rel='noopener noreferrer'>
      {author.name}
      {authors.length !== i + 1 ? ', ' : ' '}
    </NavLink>
  ));

  return (
    <div className={styles.wrapper}>
      <p>Copyright © {links}</p>
    </div>
  );
};

export default CopyRight;

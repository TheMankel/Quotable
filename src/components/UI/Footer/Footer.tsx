import CopyRight from '../CopyRight/CopyRight';
import styles from './Footer.module.css';

const Footer = () => {
  const authors = [
    { name: 'Jakub Jankowski', url: 'https://github.com/TheMankel' },
  ];

  return (
    <footer className={styles.footer}>
      <CopyRight authors={authors} />
    </footer>
  );
};

export default Footer;

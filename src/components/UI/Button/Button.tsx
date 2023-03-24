import styles from './Button.module.css';

type Props = {
  title: string;
  onClickHandler?: () => void;
};

const Button = ({ title, onClickHandler }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type='button' onClick={onClickHandler}>
        {title}
      </button>
    </div>
  );
};

export default Button;

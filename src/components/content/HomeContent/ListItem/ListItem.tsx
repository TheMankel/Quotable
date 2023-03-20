import styles from './ListItem.module.css';

type Props = {
  text: string;
  onDeleteItem: () => void;
};

const ListItem = (props: Props) => {
  return (
    <li className={styles.item} onClick={props.onDeleteItem}>
      {props.text}
    </li>
  );
};

export default ListItem;

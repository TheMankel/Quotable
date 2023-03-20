import DeleteIcon from '../../../icons/DeleteIcon';
import EditIcon from '../../../icons/EditIcon';
import styles from './ListItem.module.css';

type Props = {
  text: string;
  onDeleteItem: () => void;
  // onEditItem: () => void;
};

const ListItem = (props: Props) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.actions}>
        <button className={styles.edit}>
          <EditIcon />
        </button>
        <button className={styles.delete} onClick={props.onDeleteItem}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default ListItem;

import { useContext } from 'react';
import { ListContext } from '../../../../store/ListContext';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';
import Item from '../../../../types/Item';

interface Props {
  editHandler: (item: Item) => void;
}

const List = ({ editHandler }: Props) => {
  const listCtx = useContext(ListContext);

  if (!listCtx.items.length)
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>No quotes added</p>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {listCtx.items.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            onDeleteItem={() => listCtx.deleteItem(item.id)}
            onEditItem={() => editHandler(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;

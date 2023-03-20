import { useContext } from 'react';
import { ListContext } from '../../../../store/ListContext';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';

const List = () => {
  const listCtx = useContext(ListContext);

  return (
    <ul className={styles.list}>
      {listCtx.items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          onDeleteItem={listCtx.deleteItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default List;

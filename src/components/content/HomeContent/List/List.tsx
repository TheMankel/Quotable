import React, { useContext } from 'react';
import { ListContext } from '../../../../store/ListContext';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';

interface Props {
  openHandler: () => void;
  editHandler: (itemId: string) => void;
  // editHandler: React.Dispatch<React.SetStateAction<string>>;
}

const List = ({ openHandler, editHandler }: Props) => {
  const listCtx = useContext(ListContext);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {listCtx.items.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            onDeleteItem={listCtx.deleteItem.bind(null, item.id)}
            onEditItem={() => editHandler(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;

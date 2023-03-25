import { useContext } from 'react';
import { ListContext } from '../../../../store/ListContext';
import ListItem from '../ListItem/ListItem';
import Item from '../../../../types/Item';
import { Info, ListElement, Wrapper } from './List.style';

interface Props {
  editHandler: (item: Item) => void;
}

const List = ({ editHandler }: Props) => {
  const listCtx = useContext(ListContext);

  if (!listCtx.items.length)
    return (
      <Wrapper>
        <Info>No quotes added</Info>
      </Wrapper>
    );

  return (
    <Wrapper>
      <ListElement>
        {listCtx.items.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            onDeleteItem={() => listCtx.deleteItem(item.id)}
            onEditItem={() => editHandler(item)}
          />
        ))}
      </ListElement>
    </Wrapper>
  );
};

export default List;

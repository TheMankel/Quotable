import DeleteIcon from '../../../icons/DeleteIcon';
import EditIcon from '../../../icons/EditIcon';
import {
  Actions,
  DeleteButton,
  EditButton,
  Item,
  ItemText,
} from './ListItem.style';

type Props = {
  text: string;
  onDeleteItem: () => void;
  onEditItem: () => void;
};

const ListItem = (props: Props) => {
  return (
    <Item>
      <ItemText>{props.text}</ItemText>
      <Actions>
        <EditButton onClick={props.onEditItem}>
          <EditIcon />
        </EditButton>
        <DeleteButton onClick={props.onDeleteItem}>
          <DeleteIcon />
        </DeleteButton>
      </Actions>
    </Item>
  );
};

export default ListItem;

import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Item from '../types/Item';

type ListContextObject = {
  items: Item[];
  createItem: (text: string) => void;
  editItem: (id: string, text: string) => void;
  deleteItem: (id: string) => void;
};

interface Props {
  children: React.ReactNode;
}

export const ListContext = React.createContext<ListContextObject>({
  items: [],
  createItem: (text: string) => {},
  editItem: (id: string, text: string) => {},
  deleteItem: (id: string) => {},
});

const ListContextProvider: React.FC<Props> = (props) => {
  const [listItems, setListItems] = useLocalStorage<Item[]>('listItems', []);

  const handleCreateItem = (itemText: string) => {
    const newItem = new Item(itemText);
    setListItems((prevListItems) => [...prevListItems, newItem]);
  };

  const handleEditItem = (itemId: string, itemText: string) => {
    const newListArray = listItems.map((item) => {
      if (item.id === itemId) item.text = itemText;
      return item;
    });
    setListItems(newListArray);

    console.log(newListArray);
  };

  const handleDeleteItem = (itemId: string) => {
    const newListArray = listItems.filter((item) => item.id !== itemId);
    setListItems(newListArray);
  };

  const contextValue: ListContextObject = {
    items: listItems,
    createItem: handleCreateItem,
    editItem: handleEditItem,
    deleteItem: handleDeleteItem,
  };

  return (
    <ListContext.Provider value={contextValue}>
      {props?.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;

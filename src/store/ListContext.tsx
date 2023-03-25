import React, { useEffect, useRef } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Item from '../types/Item';

type ListContextObject = {
  items: Item[];
  createItem: (text: string) => void;
  editItem: (id: string, text: string) => void;
  deleteItem: (id: string) => void;
  isLoading: boolean;
};

type Quote = { content: string };

interface Props {
  children: React.ReactNode;
}

const API = 'https://api.quotable.io/quotes/random?limit=5&maxLength=40';

export const ListContext = React.createContext<ListContextObject>({
  items: [],
  createItem: (text: string) => {},
  editItem: (id: string, text: string) => {},
  deleteItem: (id: string) => {},
  isLoading: false,
});

const ListContextProvider = ({ children }: Props) => {
  const { data, isLoading, fetchData } = useFetchData(API);
  const [listItems, setListItems] = useLocalStorage<Item[]>('listItems', []);
  const firstRender = useRef(false);

  const handleCreateItem = (itemText: string) => {
    const newItem = new Item(itemText);
    setListItems((prevListItems) => [...prevListItems, newItem]);
  };

  const handleEditItem = (itemId: string, itemText: string) => {
    const newListArray = listItems.map((item) =>
      item.id === itemId ? { ...item, text: itemText } : item,
    );
    setListItems(newListArray);
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
    isLoading: isLoading,
  };

  useEffect(() => {
    if (isLoading || firstRender.current || listItems.length > 0) return;

    fetchData();
    firstRender.current = true;
  }, []);

  useEffect(() => {
    (data as Quote[])?.forEach((quote) => {
      console.log(quote.content);
      handleCreateItem(quote.content);
    });
  }, [data]);

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export default ListContextProvider;

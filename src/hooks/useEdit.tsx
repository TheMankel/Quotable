import { useCallback, useState } from 'react';
import { useModal } from './useModal';
import Item from '../types/Item';

export const useEdit = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [editedItem, setEditedItem] = useState<Item>();

  const handleCloseModal = useCallback(() => {
    setEditedItem(undefined);
    closeModal();
  }, [setEditedItem, closeModal]);

  const handleEdit = useCallback(
    (item: Item) => {
      openModal();
      setEditedItem(item);
    },
    [openModal, setEditedItem],
  );

  return { isModalOpen, handleCloseModal, openModal, handleEdit, editedItem };
};

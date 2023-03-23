import { useCallback, useState } from 'react';
import { useModal } from './useModal';

export const useEdit = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [editedId, setEditedId] = useState<string>();

  const handleCloseModal = useCallback(() => {
    setEditedId(undefined);
    closeModal();
  }, [setEditedId, closeModal]);

  const handleEdit = useCallback(
    (itemId: string) => {
      openModal();
      setEditedId(itemId);
    },
    [openModal, setEditedId],
  );

  return { isModalOpen, handleCloseModal, openModal, handleEdit, editedId };
};

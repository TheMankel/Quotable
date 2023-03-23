import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return { isModalOpen, openModal, closeModal };
};

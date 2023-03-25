import List from './List/List';
import Form from './Form/Form';
import Section from '../../UI/Section/Section';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import { useEdit } from '../../../hooks/useEdit';

const HomeContent = () => {
  const { isModalOpen, handleCloseModal, openModal, handleEdit, editedItem } =
    useEdit();

  return (
    <>
      <Section id='CreateNewItem'>
        <Button title='Add New Quote' onClickHandler={openModal} />
      </Section>
      <Section id='QuoteItem'>
        <List editHandler={handleEdit} />
      </Section>
      <Modal
        title={!editedItem ? 'Add New Quote' : 'Edit Quote'}
        isOpen={isModalOpen}
        closeHandler={handleCloseModal}>
        <Form item={editedItem} closeHandler={handleCloseModal} />
      </Modal>
    </>
  );
};

export default HomeContent;

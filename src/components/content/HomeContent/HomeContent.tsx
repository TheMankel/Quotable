import List from './List/List';
import Form from './Form/Form';
import Section from '../../UI/Section/Section';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import { useEdit } from '../../../hooks/useEdit';

const HomeContent = () => {
  const { isModalOpen, handleCloseModal, openModal, handleEdit, editedId } =
    useEdit();

  return (
    <>
      <Section id='CreateNewItem'>
        <Button title='Add New Quote' onClickHandler={openModal} />
      </Section>
      <Section id='QuoteItem'>
        <List openHandler={openModal} editHandler={handleEdit} />
      </Section>
      <Modal
        title={!editedId ? 'Add New Quote' : 'Edit Quote'}
        isOpen={isModalOpen}
        closeHandler={handleCloseModal}>
        <Form id={editedId} closeHandler={handleCloseModal} />
      </Modal>
    </>
  );
};

export default HomeContent;

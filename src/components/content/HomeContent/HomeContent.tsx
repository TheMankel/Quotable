import { useState } from 'react';
import List from './List/List';
import Form from './Form/Form';
import Section from '../../UI/Section/Section';
import Modal from '../../UI/Modal/Modal';
import { useEdit } from '../../../hooks/useEdit';
import Button from '../../UI/Button/Button';

const HomeContent = () => {
  const { isModalOpen, handleCloseModal, openModal, handleEdit, editedId } =
    useEdit();

  return (
    <>
      {/* <Section id='Form'>
        <Form />
      </Section> */}
      <Section id='CreateNewItem'>
        <Button title='Add New Item' onClickHandler={openModal} />
      </Section>
      <Section id='ListItem'>
        <List openHandler={openModal} editHandler={handleEdit} />
      </Section>
      <Modal
        title='Edit item'
        isOpen={isModalOpen}
        closeHandler={handleCloseModal}>
        <Form id={editedId} closeHandler={handleCloseModal} />
      </Modal>
    </>
  );
};

export default HomeContent;

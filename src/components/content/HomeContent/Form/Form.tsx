import React, { useRef, useContext } from 'react';
import { ListContext } from '../../../../store/ListContext';
import styles from './Form.module.css';

type FormEvent = React.FormEvent<HTMLFormElement>;

const NewTodo: React.FC = () => {
  const listCtx = useContext(ListContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      item: { value: string };
    };

    if (!target.item.value.trim()) {
      console.log('Provide some data!');
      return;
    }

    listCtx.createItem(target.item.value);
    target.item.value = '';
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <label>Enter some text</label>
      <input type='text' id='text' name='item'></input>
      <button type='submit'>Create item</button>
    </form>
  );
};

export default NewTodo;

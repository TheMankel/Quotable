import React, { useRef, useContext } from 'react';
import { ListContext } from '../../../../store/ListContext';
import CreateIcon from '../../../icons/CreateIcon';
import styles from './Form.module.css';

type FormEvent = React.FormEvent<HTMLFormElement>;
type Props = {
  id?: string;
  closeHandler: () => void;
};

const Form = ({ id = '', closeHandler }: Props) => {
  const listCtx = useContext(ListContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      item: { value: string };
    };

    if (!target.item.value.trim()) {
      console.log('Provide some data!');
      target.item.value = '';
      return;
    }

    if (!id) listCtx.createItem(target.item.value);
    else listCtx.editItem(id, target.item.value);

    target.item.value = '';
    closeHandler();
  };

  return (
    <form
      id='form'
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          id='text'
          name='item'
          placeholder='Enter text'
          maxLength={40}
        />
      </div>
      <div className={styles.btnWrapper}>
        <button form='form' type='submit' value='submit'>
          <CreateIcon />
        </button>
      </div>
    </form>
  );
};

export default Form;

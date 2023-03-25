import React, { useRef, useContext, useState } from 'react';
import { ListContext } from '../../../../store/ListContext';
import CreateIcon from '../../../icons/CreateIcon';
import styles from './Form.module.css';
import Item from '../../../../types/Item';

type FormEvent = React.FormEvent<HTMLFormElement>;
type Props = {
  item?: Item;
  closeHandler: () => void;
};

const Form = ({ item, closeHandler }: Props) => {
  const [inputValue, setInputValue] = useState(item?.text);
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

    if (!item) listCtx.createItem(target.item.value);
    else listCtx.editItem(item.id, target.item.value);

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
          required
          placeholder='Enter text'
          maxLength={40}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
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

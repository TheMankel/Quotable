import React, { useRef, useContext, useState } from 'react';
import { ListContext } from '../../../../store/ListContext';
import CreateIcon from '../../../icons/CreateIcon';
import Item from '../../../../types/Item';
import { FormElement, InputElement, SubmitButton } from './Form.style';

type FormEvent = React.FormEvent<HTMLFormElement>;
type Props = {
  item?: Item;
  closeHandler: () => void;
};

const Form = ({ item, closeHandler }: Props) => {
  const [inputValue, setInputValue] = useState<string>(item?.text || '');
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

    if (!item) listCtx.createItem(target.item.value.trim());
    else listCtx.editItem(item.id, target.item.value.trim());

    target.item.value = '';
    closeHandler();
  };

  return (
    <FormElement id='form' ref={formRef} onSubmit={handleSubmit}>
      <div className='input'>
        <InputElement
          type='text'
          id='text'
          name='item'
          required
          placeholder='Enter text'
          maxLength={40}
          autoComplete='off'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </div>
      <div>
        <SubmitButton form='form' type='submit' value='submit'>
          <CreateIcon />
        </SubmitButton>
      </div>
    </FormElement>
  );
};

export default Form;

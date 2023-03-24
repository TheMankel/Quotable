import { nanoid } from 'nanoid';

class Item {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = nanoid();
  }
}

export default Item;

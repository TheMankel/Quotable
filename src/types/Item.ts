class Item {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString() + Math.random();
  }
}

export default Item;

import List from './List/List';
import Form from './Form/Form';
import Heading from './Heading/Heading';

const HomeContent = () => {
  return (
    <>
      <Heading title='My List Item' />
      <Form />
      <List />
    </>
  );
};

export default HomeContent;

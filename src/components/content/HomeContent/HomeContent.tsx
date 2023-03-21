import List from './List/List';
import Form from './Form/Form';
import Heading from '../../UI/Heading/Heading';
import Section from '../../UI/Section/Section';

const HomeContent = () => {
  return (
    <>
      <Section id='Form'>
        <Heading title='My List Item' />
        <Form />
      </Section>
      <Section id='ListItem'>
        <List />
      </Section>
    </>
  );
};

export default HomeContent;

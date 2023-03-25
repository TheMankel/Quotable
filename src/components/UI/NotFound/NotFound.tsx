import Button from '../Button/Button';
import Section from '../Section/Section';
import { Wrapper, Title, Subtitle, Link } from './NotFound.style';

const NotFound = () => {
  return (
    <Section id='PageNotFound'>
      <Wrapper>
        <Title>404</Title>
        <Subtitle>Oops! Looks like you followed a bad link</Subtitle>
        <Link to='/'>
          <Button title='Home' />
        </Link>
      </Wrapper>
    </Section>
  );
};

export default NotFound;

import { NavLink } from 'react-router-dom';
import { Wrapper } from './CopyRight.style';

type Props = {
  authors: {
    name: string;
    url: string;
  }[];
};

const CopyRight = ({ authors }: Props) => {
  const links = authors.map((author, i) => (
    <NavLink key={i} to={author.url} target='_blank' rel='noopener noreferrer'>
      {author.name}
      {authors.length !== i + 1 ? ', ' : ' '}
    </NavLink>
  ));

  return (
    <Wrapper>
      <p>Copyright © {links}</p>
    </Wrapper>
  );
};

export default CopyRight;

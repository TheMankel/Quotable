import { NavLink } from 'react-router-dom';

type Props = {
  pagesUrls: {
    url: string;
    title: string;
  }[];
};

const Navigation = ({ pagesUrls }: Props) => {
  if (!pagesUrls.length) return null;

  const linkElements = pagesUrls.map((page, index) => {
    return (
      <li key={index}>
        <NavLink to={page?.url}>{page?.title}</NavLink>
      </li>
    );
  });

  return <>{linkElements}</>;
};

export default Navigation;

import { NavList, Link } from './Navigation.style';

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
        <Link to={page.url}>{page.title}</Link>
      </li>
    );
  });

  return <NavList>{linkElements}</NavList>;
};

export default Navigation;

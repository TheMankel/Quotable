import Navigation from '../Navigation/Navigation';
import { NavWrapper } from './NavBar.style';

const NavBar = () => {
  const pagesUrls = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/random-quote',
      title: 'Random Quote',
    },
  ];
  return (
    <header>
      <NavWrapper>
        <Navigation pagesUrls={pagesUrls} />
      </NavWrapper>
    </header>
  );
};

export default NavBar;

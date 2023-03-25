import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar';
import { Main } from './Content.style';

const Content = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Content;

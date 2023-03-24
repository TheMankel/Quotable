import { Route, Routes } from 'react-router-dom';
import Content from './components/content/Content';
import Home from './views/Home';
import API from './views/RandomQuote';
import NotFound from './views/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Content />}>
        <Route path='/' element={<Home />} />
        <Route path='/random-quote' element={<API />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

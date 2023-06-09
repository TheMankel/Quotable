import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ListContextProvider from './store/ListContext';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ListContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ListContextProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ListContextProvider from './store/ListContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

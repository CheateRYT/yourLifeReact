import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './Contexts/UserContext';
import { MainMenu } from './MainMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MainMenu />
    </UserProvider>
  </React.StrictMode>,
);

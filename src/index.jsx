import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './Contexts/UserContext';
import { MainMenu } from './MainMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { Game } from './Components/Game';
import { Settings } from './Components/Settings';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="*" element={<MainMenu />} />
          <Route path="/game/*" Component={Game}></Route>
          <Route path="/settings" Component={Settings} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

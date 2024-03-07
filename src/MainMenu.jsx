import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Settings } from './Components/Settings';
import { Game } from './Components/Game';
import './MainMenu.scss';

export const MainMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const showAuthorAlert = () => {
    alert('Автор - Редников Лев CheateRYT');
  };

  const handleStart = () => {
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return <div className="main-menu"></div>;
};

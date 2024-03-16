import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Settings } from './Components/Settings';
import { Game } from './Components/Game';
import './MainMenu.scss';

export const MainMenu = () => {
  const navigate = useNavigate();

  const showAuthorAlert = () => {
    alert('Автор - Редников Лев CheateRYT');
  };

  const handleGameButton = () => {
    navigate('/game');
  };
  const handleSettingsButton = () => {
    navigate('/settings');
  };
  return (
    <div className="main-menu container">
      <h1 className="main-menu__title">YourLife</h1>
      <button onClick={handleGameButton} className="main-menu__button">
        Играть
      </button>
      <button onClick={handleSettingsButton} className="main-menu__button">
        Настройки
      </button>
      <button onClick={showAuthorAlert} className="main-menu__button">
        Автор
      </button>
    </div>
  );
};

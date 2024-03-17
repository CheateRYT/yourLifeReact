import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Settings } from './Components/Settings';
import { Game } from './Components/Game';
import './MainMenu.scss';
import { CreateGamePopup } from './Components/popups/CreateGamePopup';
import { UserContext } from './Contexts/UserContext';
export const MainMenu = () => {
  const [showCreateGame, setShowCreateGame] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const showAuthorAlert = () => {
    alert('Автор - Редников Лев CheateRYT');
  };

  const handleGameButton = () => {
    if (!user) {
      setShowCreateGame(true);
    } else {
      navigate('/game');
    }
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
      {showCreateGame && <CreateGamePopup showPopup={setShowCreateGame} />}
    </div>
  );
};

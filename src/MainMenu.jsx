import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from './Contexts/UserContext';
import { Settings } from './Components/Settings';
import { Author } from './Components/Author';
import { Game } from './Components/Game';
import './MainMenu.scss';

export const MainMenu = () => {
  const { user, createUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleStart = () => {
    //При старте игры
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
      {menuOpen && (
        <div className="main-menu container">
          <h1 className="main-menu__title">YourLife</h1>
          <div className="d-flex flex-column gap-4">
            <Link to="/game" className="main-menu__link">
              <button className="main-menu__button" onClick={handleStart}>
                Начать
              </button>
            </Link>
            <Link to="/settings" className="main-menu__link">
              <button className="main-menu__button" onClick={closeMenu}>
                Настройки
              </button>
            </Link>
            <Link to="/author" className="main-menu__link">
              <button className="main-menu__button" onClick={closeMenu}>
                Автор
              </button>
            </Link>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
};

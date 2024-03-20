import React, { useContext, useEffect, useState } from 'react';
import './scss/DeathPopup.scss';
import { FaSkull } from 'react-icons/fa';
import { UserContext } from '../Contexts/UserContext';
import emptyProfile from '../img/emptyProfile.png';
import femaleProfile from '../img/femaleProfile.png';
import maleProfile from '../img/maleProfile.png';
import clickButtonAudio from '../Utils/clickButtonAudio.mp3';
import { useNavigate } from 'react-router-dom';
import { CreateGamePopup } from './popups/CreateGamePopup';
export const DeathPopup = ({ hideDeathPopup }) => {
  const { user } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(emptyProfile);
  const [showCreateGame, setShowCreateGame] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.gender) {
      setProfileImage(user.gender === 'female' ? femaleProfile : maleProfile);
    } else {
      setProfileImage(emptyProfile);
    }
  }, [user]);
  const handleMainMenuExit = () => {
    const audio = new Audio(clickButtonAudio);
    audio.play();
    navigate('/');
  };
  const handleNewGame = () => {
    const audio = new Audio(clickButtonAudio);
    audio.play();
    setShowCreateGame(true);
  };
  return (
    <div className="death-popup popup-narrow">
      <span
        className="close-button-narrow"
        onClick={() => hideDeathPopup(false)}
      >
        X
      </span>
      <div className="popup-narrow-content">
        <div className="death-title">
          <FaSkull style={{ fontSize: '1em', marginRight: '5px' }} />
          <span className="death-title__text">Смерть</span>
        </div>
        <div className="death-data">
          <div className="death-image">
            <img src={profileImage} alt="Portait" />
          </div>
          <span className="death-username">
            {user.name} {user.surname}
          </span>
          <span className="death-age">Возраст: {user.age} лет</span>
          <span className="death-diseases">Болезни: {user.diseases}</span>

          <div className="death-buttons">
            <button onClick={handleMainMenuExit} className="death-button">
              Выйти в главное меню
            </button>
            <button onClick={handleNewGame} className="death-button">
              Начать заново
            </button>
          </div>
        </div>
      </div>
      {showCreateGame && <CreateGamePopup />}
    </div>
  );
};

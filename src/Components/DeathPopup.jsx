import React, { useContext, useEffect, useState } from 'react';
import './scss/DeathPopup.scss';
import { FaSkull } from 'react-icons/fa';
import { UserContext } from '../Contexts/UserContext';
import emptyProfile from '../img/emptyProfile.png';
import femaleProfile from '../img/femaleProfile.png';
import maleProfile from '../img/maleProfile.png';
export const DeathPopup = ({ hideDeathPopup }) => {
  const { user } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(emptyProfile);
  useEffect(() => {
    if (user && user.gender) {
      setProfileImage(user.gender === 'female' ? femaleProfile : maleProfile);
    } else {
      setProfileImage(emptyProfile);
    }
  }, [user]);
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
            <button className="death-button">Выйти в главное меню</button>
            <button className="death-button">Начать заново</button>
          </div>
        </div>
      </div>
    </div>
  );
};

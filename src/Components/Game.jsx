import React, { useContext, useEffect, useState } from 'react';
import './css/Game.scss';
import { UserContext } from '../Contexts/UserContext';
import { ProgressBar } from 'react-bootstrap';
import emptyProfile from '../img/emptyProfile.png';
import femaleProfile from '../img/femaleProfile.png';
import maleProfile from '../img/maleProfile.png';

export const Game = () => {
  const { user, createUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(emptyProfile);

  useEffect(() => {
    if (user && user.gender) {
      setProfileImage(user.gender === 'female' ? femaleProfile : maleProfile);
    } else {
      setProfileImage(emptyProfile);
    }
  }, [user, createUser]);

  return (
    <div className="game">
      <div className="container game-navbar">
        <h1 className="game-navbar__title">YourLife</h1>
        <ul className="charact-list">
          <div className="characts-column">
            <li className="charact">
              <span className="charact__title">Здоровье</span>
              <ProgressBar now={user ? user.health : 0} />
            </li>
            <li className="charact">
              <span className="charact__title">Усталость</span>
              <ProgressBar now={user ? user.tire : 0} />
            </li>
          </div>
          <div className="characts-column">
            <li className="charact">
              <span className="charact__title">Популярность</span>
              <ProgressBar now={user ? user.fame : 0} />
            </li>
            <li className="charact">
              <span className="charact__title">Красота</span>
              <ProgressBar now={user ? user.beauty : 0} />
            </li>
          </div>
        </ul>
        <div className="mini-profile">
          <img className="mini-profile__img" src={profileImage} alt="" />
          <span className="mini-profile__name">
            {user ? user.name + ' ' + user.surname : 'Персонаж не создан'}
          </span>
        </div>
      </div>
    </div>
  );
};

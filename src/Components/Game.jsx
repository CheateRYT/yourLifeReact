import React, { useContext, useEffect, useState } from 'react';
import './scss/Game.scss';
import { UserContext } from '../Contexts/UserContext';
import { ProgressBar } from 'react-bootstrap';
import emptyProfile from '../img/emptyProfile.png';
import femaleProfile from '../img/femaleProfile.png';
import maleProfile from '../img/maleProfile.png';
import { ProfilePopup } from './popups/ProfilePopup';
import { Outlet, useNavigate } from 'react-router-dom';
import clickButtonAudio from '../Utils/clickButtonAudio.mp3';
export const Game = () => {
  const { user, createUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(emptyProfile);
  const [statusProfilePopup, setStatusProfilePopup] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.gender) {
      setProfileImage(user.gender === 'female' ? femaleProfile : maleProfile);
    } else {
      setProfileImage(emptyProfile);
    }
  }, [user, createUser]);
  const handleMiniProfile = () => {
    if (user) {
      setStatusProfilePopup(true);
    } else {
      alert('У вас нету персонажа! Создайте в главном меню');
      navigate('/');
    }
  };
  const handleNavbarTitle = () => {
    navigate('/');
  };
  const handleMenuIdNavigate = (event) => {
    const audio = new Audio(clickButtonAudio);
    audio.play();
    const id = event.target.id;
    const textAfterDoubleUnderscore = id.split('__')[1];
    navigate(`/game/${textAfterDoubleUnderscore}`);
  };
  return (
    <div className="game">
      <div className="container game-navbar">
        <h1 onClick={handleNavbarTitle} className="game-navbar__title">
          YourLife
        </h1>
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
          <img
            onClick={handleMiniProfile}
            className="mini-profile__img"
            src={profileImage}
            alt=""
          />
          <span onClick={handleMiniProfile} className="mini-profile__name">
            {user ? user.name + ' ' + user.surname : 'Персонаж не создан'}
          </span>
          <span onClick={handleMiniProfile} className="mini-profile__money">
            {user ? user.money + ' ₽' : ''}
          </span>
        </div>
      </div>
      <div className="game-all">
        <div className="game-menu">
          <ul className="game-links">
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__main"
            >
              Главная
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__character"
            >
              Персонаж
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__occupation"
            >
              Занятия
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__shopping"
            >
              Покупки
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__casino"
            >
              Азартные игры
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__pets"
            >
              Питомцы
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__assets"
            >
              Имущество
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__doctor"
            >
              Доктор
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__emmigrate"
            >
              Переезд
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__licenses"
            >
              Лицензии
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__mindBody"
            >
              Тело и Дух
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__nightClub"
            >
              Ночной клуб
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__socialMedia"
            >
              Социальные сети
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__vacation"
            >
              Отдых
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__crime"
            >
              Криминал
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__children"
            >
              Дети
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__love"
            >
              Любовь
            </li>
            <li
              onClick={handleMenuIdNavigate}
              className="game-links__link"
              id="game-link__lottery"
            >
              Лотерея
            </li>
          </ul>
        </div>
        <div className="game-overlay game-container">
          <Outlet />
        </div>
      </div>
      {statusProfilePopup && (
        <ProfilePopup
          profileImage={profileImage}
          hideProfilePopup={setStatusProfilePopup}
        />
      )}
    </div>
  );
};

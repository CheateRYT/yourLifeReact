import React, { useState, useContext } from 'react';
import '../scss/ProfilePopup.scss';
import { FaUser } from 'react-icons/fa';
import { UserContext } from '../../Contexts/UserContext';
import { ProgressBar } from 'react-bootstrap';
export const ProfilePopup = ({ profileImage, hideProfilePopup }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="profile-popup popup-narrow">
      <span
        className="close-button-narrow"
        onClick={() => hideProfilePopup(false)}
      >
        X
      </span>
      <div className="popup-narrow-content">
        <div className="about d-flex ">
          <img className="about__img" src={profileImage} alt="" />
          <span className="about__userName">
            {user.name} {user.surname}
          </span>
          <span className="about__prefix">Ты</span>
        </div>
        <div className="profile-title">
          <FaUser style={{ fontSize: '1em', marginRight: '5px' }} />
          <span className="profile-title__text">Профиль</span>
        </div>
        <div className="profile-data">
          <span className="profile-gender">Гендер: {user.gender} </span>
          <span className="profile-age">Возраст: {user.age} лет</span>
          <span className="profile-marryPartner">
            Брак: {user.marryPartner}
          </span>
          <span className="profile-education">
            Образование: {user.education}
          </span>
          <span className="profile-parents">Родители: {user.parents}</span>
          <span className="profile-occupation">Занятие: {user.occupation}</span>
          <span className="profile-diseases">Болезни: {user.diseases}</span>
          <span className="profile-location">Локация: {user.location}</span>
          <span className="profile-money">Деньги: {user.money} ₽</span>
        </div>

        <ul className="profile-charact-list">
          <li className="charact">
            <span className="charact__title">Здоровье</span>
            <ProgressBar now={user ? user.health : 0} />
          </li>
          <li className="charact">
            <span className="charact__title">Усталость</span>
            <ProgressBar now={user ? user.tire : 0} />
          </li>

          <li className="charact">
            <span className="charact__title">Популярность</span>
            <ProgressBar now={user ? user.fame : 0} />
          </li>
          <li className="charact">
            <span className="charact__title">Красота</span>
            <ProgressBar now={user ? user.beauty : 0} />
          </li>
        </ul>
      </div>
    </div>
  );
};

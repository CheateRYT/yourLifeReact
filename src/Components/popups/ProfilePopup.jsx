import React, { useState, useContext } from 'react';
import '../scss/ProfilePopup.scss';
import { FaUser } from 'react-icons/fa';
import { UserContext } from '../../Contexts/UserContext';

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
      </div>
    </div>
  );
};

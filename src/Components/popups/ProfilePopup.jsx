import React, { useState, useContext } from 'react';
import '../scss/ProfilePopup.scss';
import { UserContext } from '../../Contexts/UserContext';
export const ProfilePopup = ({ profileImage, hideProfilePopup }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="profile-popup popup-narrow">
      <span className="close-button" onClick={() => hideProfilePopup(false)}>
        X
      </span>
      <div className="popup-content">
        <div className="about d-flex ">
          <img className="about__img" src={profileImage} alt="" />
          <span className="about__userName">
            {user.name} {user.surname}
          </span>
          <span className="about__prefix">Ты</span>
        </div>
      </div>
    </div>
  );
};

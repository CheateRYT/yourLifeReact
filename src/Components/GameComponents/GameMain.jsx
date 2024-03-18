import React, { useState, useContext } from 'react';
import '../scss/GameMain.scss';
import { UserContext } from '../../Contexts/UserContext';
export const GameMain = () => {
  const { user, updateAge, setUser } = useContext(UserContext);
  const handleUpdateAge = () => {
    user.age++;
    user.updateLocalStorage();
  };
  return (
    <div className="game-main">
      <div className="history">
        <h1 className="history__title">История</h1>
        <span className="history__text">
          randomtext randomtext randomtext randomtext randomtext random rand
          dsssdddddddddddddddddddddddsssdddddddddddddddddddddddsssdddddddddddddddddddddddsssdddddddddddddddddddddddsssdddddddddddddddddddddddsssdddddddddddddddddddddddsssdddddddddddddddddddddd
        </span>
        <span className="history__text">new</span>
      </div>
      <div onClick={handleUpdateAge} className="age-button">
        <span className="age-button__plus">+</span>
        <span className="age-button__text">Год</span>
      </div>
    </div>
  );
};

import React, { useState, useContext, useRef, useEffect } from 'react';
import '../scss/GameMain.scss';
import { UserContext } from '../../Contexts/UserContext';
import clickButtonSound from '../../Utils/clickButtonAudio.mp3';
export const GameMain = () => {
  const { user, updateAge, setUser } = useContext(UserContext);
  const historyRef = useRef(null);

  const handleUpdateAge = () => {
    const audio = new Audio(clickButtonSound);
    audio.play();
    user.age++;
    user.updateLocalStorage();
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [user]);

  return (
    <div className="game-main">
      <div ref={historyRef} className="history">
        <h1 className="history__title">История</h1>
        <span className="history__text">
          randomtext randomtext randomtext randomtext randomtext randomtext
        </span>
      </div>
      <div onClick={handleUpdateAge} className="age-button">
        <span className="age-button__plus">+</span>
        <span className="age-button__text">Год</span>
      </div>
    </div>
  );
};

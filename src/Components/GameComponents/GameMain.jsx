import React, { useState, useContext, useRef, useEffect } from 'react';
import '../scss/GameMain.scss';
import { UserContext } from '../../Contexts/UserContext';
import clickButtonSound from '../../Utils/clickButtonAudio.mp3';
import { HistoryTexts } from '../../Classes/HistoryTexts.js';
import { Diseases } from '../../Classes/Diseases.js';

export const GameMain = () => {
  const { user } = useContext(UserContext);
  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }

    const savedHistoryText = localStorage.getItem('historyText');
    if (savedHistoryText) {
      historyRef.current.innerHTML = savedHistoryText;
    }
  }, []);

  const handleUpdateAge = () => {
    const audio = new Audio(clickButtonSound);
    audio.play();
    user.age++;

    if (Math.random() < 0.1) {
      const randomDisease =
        Diseases[Math.floor(Math.random() * Diseases.length)];
      if (user.diseases) {
        user.diseases += `, ${randomDisease}`; // Добавление новой болезни через запятую
      } else {
        user.diseases = randomDisease;
      }
    }

    user.updateLocalStorage();

    const randomText =
      HistoryTexts[Math.floor(Math.random() * HistoryTexts.length)]; // выбор случайного текста
    const p = document.createElement('p');
    p.textContent = randomText;
    historyRef.current.appendChild(p); // добавление абзаца в блок "history"

    localStorage.setItem('historyText', historyRef.current.innerHTML); // сохранение текста истории в localStorage
  };

  return (
    <div className="game-main">
      <div ref={historyRef} className="history">
        <h1 className="history__title">История</h1>
      </div>
      <div onClick={handleUpdateAge} className="age-button">
        <span className="age-button__plus">+</span>
        <span className="age-button__text">Год</span>
      </div>
    </div>
  );
};

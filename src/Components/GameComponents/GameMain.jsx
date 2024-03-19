import React, { useContext, useRef, useEffect } from 'react';
import '../scss/GameMain.scss';
import { UserContext } from '../../Contexts/UserContext';
import clickButtonSound from '../../Utils/clickButtonAudio.mp3';
import { HistoryTexts } from '../../Classes/HistoryTexts.js';
import { Diseases } from '../../Classes/Diseases.js';

export const GameMain = () => {
  const { user, updateUser, setHealthNow } = useContext(UserContext);
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
    if (user.age >= 14 && Math.random() < 0.1) {
      const randomDisease =
        Diseases[Math.floor(Math.random() * Diseases.length)];
      if (user.diseases !== 'Отсутствует') {
        user.diseases += `, ${randomDisease}`;
      } else {
        user.diseases = randomDisease;
      }
    }

    if (user.diseases !== 'Отсутствует') {
      const diseasesArray = user.diseases.split(',');
      for (let i = 0; i < diseasesArray.length; i++) {
        let healthDecreasePercentage = Math.floor(Math.random() * 21) + 10;
        if (diseasesArray.length > 1) {
          healthDecreasePercentage += 10 * (diseasesArray.length - 1);
        }
        user.health -= Math.floor(
          user.health * (healthDecreasePercentage / 100),
        );
      }
    }

    user.updateLocalStorage();

    const randomText =
      HistoryTexts[Math.floor(Math.random() * HistoryTexts.length)];
    const p = document.createElement('p');
    p.textContent = randomText;
    historyRef.current.appendChild(p);
    localStorage.setItem('historyText', historyRef.current.innerHTML);

    updateUser(user);
    setHealthNow(user.health);
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

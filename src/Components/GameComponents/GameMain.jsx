import React, { useState, useContext, useRef, useEffect } from 'react';
import '../scss/GameMain.scss';
import { UserContext } from '../../Contexts/UserContext';
import clickButtonSound from '../../Utils/clickButtonAudio.mp3';
import { HistoryTexts } from '../../Classes/HistoryTexts.js';
import { Diseases } from '../../Classes/Diseases.js';
export const GameMain = () => {
  const { user, updateUser } = useContext(UserContext);
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
      // Появление болезни только после 14 лет с 10% вероятностью
      const randomDisease =
        Diseases[Math.floor(Math.random() * Diseases.length)];
      if (user.diseases !== 'Отсутствует') {
        user.diseases += `, ${randomDisease}`; // Добавление новой болезни через запятую
      } else {
        user.diseases = randomDisease;
      }
      // Уменьшение здоровья пользователя
    }
    console.log(user.diseases);
    if (user.diseases !== 'Отсутствует') {
      const diseasesArray = user.diseases.split(',');
      for (let i = 0; i < diseasesArray.length; i++) {
        let healthDecreasePercentage = Math.floor(Math.random() * 21) + 10; // От 10% до 30%
        if (diseasesArray.length > 1) {
          healthDecreasePercentage += 10 * (diseasesArray.length - 1); // Дополнительное уменьшение здоровья за каждую дополнительную болезнь
        }
        user.health -= Math.floor(
          user.health * (healthDecreasePercentage / 100),
        );
      }
    }
    user.updateLocalStorage();
    const randomText =
      HistoryTexts[Math.floor(Math.random() * HistoryTexts.length)]; // Выбор случайного текста
    const p = document.createElement('p');
    p.textContent = randomText;
    historyRef.current.appendChild(p); // Добавление абзаца в блок "history"
    localStorage.setItem('historyText', historyRef.current.innerHTML);
    updateUser(user); // Сохранение текста истории в localStorage
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

import React, { useContext, useRef, useEffect, useState } from 'react';
import '../scss/GameMain.scss';
import { UserContext } from '../../Contexts/UserContext';
import clickButtonSound from '../../Utils/clickButtonAudio.mp3';
import {
  FemaleStories,
  MaleStories,
  ChildStories,
} from '../../Classes/HistoryTexts.js';
import { Diseases } from '../../Classes/Diseases.js';
import { DeathPopup } from '../DeathPopup.jsx';

export const GameMain = () => {
  const { user, updateUser, setHealthNow } = useContext(UserContext);
  const historyRef = useRef(null);
  const [showDeathPopup, setShowDeathPopup] = useState(false);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
    const savedHistoryText = localStorage.getItem('historyText');
    if (savedHistoryText) {
      historyRef.current.innerHTML = savedHistoryText;
    }
  }, []);
  const getAgeText = (age) => {
    if (age === 1) {
      return 'год';
    } else if (age % 10 === 1 && age !== 11) {
      return 'год';
    } else if (
      (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) &&
      (age < 10 || age > 20)
    ) {
      return 'года';
    } else {
      return 'лет';
    }
  };
  const handleUpdateAge = () => {
    const audio = new Audio(clickButtonSound);
    audio.play();

    let selectedStories = [];
    if (user.age <= 5) {
      selectedStories = ChildStories;
    }
    if (user.gender == 'Женский' && user.age > 5) {
      selectedStories = FemaleStories;
    }
    if (user.gender == 'Мужской' && user.age > 5) {
      selectedStories = MaleStories;
    }
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
      let healthDecrease = Math.floor(Math.random() * 11) + 10; // Случайное число от 10 до 20
      for (let i = 0; i < diseasesArray.length; i++) {
        healthDecrease += 5; // Дополнительное уменьшение за каждую болезнь
      }
      user.health -= healthDecrease;
    }

    if (user.health <= 0) {
      setShowDeathPopup(true);
      localStorage.removeItem('historyText');
      localStorage.removeItem('user');
    } else {
      user.updateLocalStorage();
      const randomText =
        selectedStories[Math.floor(Math.random() * selectedStories.length)];
      const p = document.createElement('p');

      const ageText = getAgeText(user.age);
      const ageString = user.age === 1 ? '1 год' : `${user.age} ${ageText}`;

      p.textContent = `Возраст: ${ageString} - ${randomText}`;
      historyRef.current.appendChild(p);
      localStorage.setItem('historyText', historyRef.current.innerHTML);
      updateUser(user);
      setHealthNow(user.health);
    }
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
      {showDeathPopup && <DeathPopup hideDeathPopup={setShowDeathPopup} />}
    </div>
  );
};

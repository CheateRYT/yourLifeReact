import React, { useState, useContext } from 'react';
import '../scss/CreateGamePopup.scss';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { parentsData } from '../../Classes/Parents';
export const CreateGamePopup = ({ showPopup }) => {
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101),
  );
  const [randomElementIndexParent, setRandomElementIndexParent] = useState(0);
  const { createUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    location: 'none',
    gender: 'none',
  });
  const getRandomElementParent = () => {
    const randomIndex = Math.floor(Math.random() * parentsData.length);
    setRandomElementIndexParent(randomIndex);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStartGame = () => {
    getRandomElementParent();
    if (
      formData.gender == 'Средний' ||
      formData.location == 'Америка, Лос-Анджелес'
    ) {
      alert('Вы не патриот, вам нельзя играть!!!');
      showPopup(false);
    } else if (
      formData &&
      formData.name &&
      formData.surname &&
      formData &&
      formData &&
      formData.gender &&
      formData.location !== 'none' &&
      formData.gender !== 'none'
    ) {
      createUser(
        formData.name,
        formData.surname,
        0,
        100,
        0,
        randomNumber,
        formData.gender,
        0,
        'Отсутствует',
        'Отсутствует',
        'Отсутствует',
        0,
        'Отсутствует',
        formData.location,
        parentsData[randomElementIndexParent],
        'Отсутствует',
      );

      navigate('/game');
      showPopup(false);
    }
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={() => showPopup(false)}>
          X
        </span>
        <h2 className="popup-title">Создать персонажа</h2>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Фамилия:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="form-input"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Локация:</label>
          <select
            id="location-selector"
            name="location"
            className="form-input"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option value="none">Выбрать</option>
            <option value="Россия, Москва">Россия, Москва</option>
            <option value="Россия, Санкт-Петербург">
              Россия, Санкт-Петербург
            </option>
            <option value="Россия, Ростов-на-Дону">
              Россия, Ростов-на-Дону
            </option>
            <option value="Россия, Красноярск">Россия, Красноярск</option>
            <option value="Америка, Лос-Анджелес">Америка, Лос-Анджелес</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Гендер:</label>
          <select
            id="gender"
            name="gender"
            className="form-input"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="none">Выбрать</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
            <option value="Средний">Средний</option>
          </select>
        </div>
        <button onClick={handleStartGame} className="create-button">
          Играть
        </button>
      </div>
    </div>
  );
};

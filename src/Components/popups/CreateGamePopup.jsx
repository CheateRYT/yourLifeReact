import React, { useState, useContext } from 'react';
import '../scss/CreateGamePopup.scss';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const CreateGamePopup = ({ showPopup }) => {
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101),
  );
  const { createUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: 'none',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStartGame = () => {
    if (formData.gender === 'medium') {
      alert('Вам запрещено играть, выберите другой пол!!!');
      showPopup(false);
    } else if (
      formData &&
      formData.name &&
      formData.surname &&
      formData &&
      formData &&
      formData.gender &&
      formData.gender !== 'none'
    ) {
      createUser(
        formData.name,
        formData.surname,
        100,
        100,
        0,
        randomNumber,
        formData.gender,
        0,
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
          <label htmlFor="gender">Гендер:</label>
          <select
            id="gender"
            name="gender"
            className="form-input"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="none">Выбрать</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
            <option value="medium">Средний</option>
          </select>
        </div>
        <button onClick={handleStartGame} className="create-button">
          Играть
        </button>
      </div>
    </div>
  );
};

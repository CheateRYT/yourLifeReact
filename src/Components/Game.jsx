import './css/Game.scss';
import { useContext, useEffect } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import emptyProfile from '../img/emptyProfile.png';
export const Game = () => {
  return (
    <div className="game">
      <div className="container game-navbar">
        <h1 className="game-navbar__title">YourLife</h1>
        <ul className="charact-list">
          <div className="characts-column">
            <li className="charact">
              <span className="charact__title">Здоровье</span>
              <ProgressBar key={0} />
            </li>
            <li className="charact">
              <span className="charact__title">Усталость</span>
              <ProgressBar key={1} />
            </li>
          </div>
          <div className="characts-column">
            <li className="charact">
              <span className="charact__title">Популярность</span>
              <ProgressBar key={2} />
            </li>
            <li className="charact">
              <span className="charact__title">Красота</span>
              <ProgressBar key={3} />
            </li>
          </div>
        </ul>
        <div className="mini-profile">
          <img className="mini-profile__img" src={emptyProfile} alt="" />
          <span className="mini-profile__name">Персонаж не создан</span>
        </div>
      </div>
    </div>
  );
};
//{
/* <div className="container game-navbar d-flex">
        <h1 className="game-navbar__title">YourLife</h1>
        <ul className="characteristics d-flex">
          <div className="characteristics-group">
            <li className="characteristics__health">
              <div className="characteristic-name">Здоровье</div>
              <div id="health-bar" className="characteristic-bar"></div>
            </li>
            <li className="characteristics__tire">
              <div className="characteristic-name">Усталость</div>
              <div id="tire-bar" className="characteristic-bar"></div>
            </li>
          </div>
          <div className="characteristics-group">
            <li className="characteristics__beauty">
              <div className="characteristic-name">Красота</div>
              <div id="beauty-bar" className="characteristic-bar"></div>
            </li>
            <li className="characteristics__fame">
              <div className="characteristic-name">Популярность</div>
              <div id="fame-bar" className="characteristic-bar"></div>
            </li>
          </div>
        </ul>
      </div> */
//}

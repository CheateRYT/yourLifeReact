import './css/Game.scss';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
export const Game = () => {
  const { user, createUser, updateUserName, updateMoney } =
    useContext(UserContext);

  return (
    <div className="game">
      <ProgressBar now={60} />
    </div>
  );
};
{
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
}

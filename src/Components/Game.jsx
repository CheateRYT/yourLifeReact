import './css/Game.scss';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Routes, Route, Outlet } from 'react-router-dom';

export const Game = () => {
  const { user, createUser, updateUserName, updateMoney } =
    useContext(UserContext);

  return (
    <div className="game container">
      <Outlet />
    </div>
  );
};

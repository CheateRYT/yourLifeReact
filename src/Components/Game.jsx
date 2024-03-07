import './css/Game.scss';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

export const Game = () => {
  const { user, createUser, updateUserName, updateMoney } =
    useContext(UserContext);

  return <div className="game container"></div>;
};

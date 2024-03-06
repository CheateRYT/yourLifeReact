import './css/Game.scss';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

export const Game = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="game container">
      {user && <p>User&apos;s Money: {user.money}</p>}
    </div>
  );
};

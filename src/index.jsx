import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './Contexts/UserContext';
import { MainMenu } from './MainMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { Game } from './Components/Game';
import { Settings } from './Components/Settings';
const root = ReactDOM.createRoot(document.getElementById('root'));
import { GameMain } from './Components/GameComponents/GameMain';
import { GameAssets } from './Components/GameComponents/GameAssets';
import { GameCharacter } from './Components/GameComponents/GameCharacter';
import { GameLove } from './Components/GameComponents/GameLove';
import { GameNightClub } from './Components/GameComponents/GameNightClub';
import { GamePets } from './Components/GameComponents/GamePets';
import { GameCasino } from './Components/GameComponents/GameCasino';
import { GameChildren } from './Components/GameComponents/GameChildren';
import { GameCrime } from './Components/GameComponents/GameCrime';
import { GameLicenses } from './Components/GameComponents/GameLicenses';
import { GameMindBody } from './Components/GameComponents/GameMindBody';
import { GameOccupation } from './Components/GameComponents/GameOccupation';
import { GameShopping } from './Components/GameComponents/GameShopping';
import { GameSocialMedia } from './Components/GameComponents/GameSocialMedia';
import { GameDoctor } from './Components/GameComponents/GameDoctor';
import { GameVacation } from './Components/GameComponents/GameVacation';
import { GameLottery } from './Components/GameComponents/GameLottery';
import { GameEmmigrate } from './Components/GameComponents/GameEmmigrate';
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="*" element={<MainMenu />} />
          <Route path="/game/*" Component={Game}>
            <Route path="main" Component={GameMain} />
            <Route path="pets" Component={GamePets} />
            <Route path="nightClub" Component={GameNightClub} />
            <Route path="love" Component={GameLove} />
            <Route path="character" Component={GameCharacter} />
            <Route path="assets" Component={GameAssets} />
            <Route path="casino" Component={GameCasino} />
            <Route path="doctor" Component={GameDoctor} />
            <Route path="licenses" Component={GameLicenses} />
            <Route path="mindBody" Component={GameMindBody} />
            <Route path="occupation" Component={GameOccupation} />
            <Route path="children" Component={GameChildren} />
            <Route path="socialMedia" Component={GameSocialMedia} />
            <Route path="emmigrate" Component={GameEmmigrate} />
            <Route path="lottery" Component={GameLottery} />
            <Route path="crime" Component={GameCrime} />
            <Route path="shopping" Component={GameShopping} />
            <Route path="vacation" Component={GameVacation} />
          </Route>
          <Route path="/settings" Component={Settings} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

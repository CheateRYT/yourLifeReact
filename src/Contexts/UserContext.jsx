import React, { createContext, useState, useEffect } from 'react';
import { User } from '../Classes/User';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage) {
      setUser(
        new User(
          userFromLocalStorage.name,
          userFromLocalStorage.surname,
          userFromLocalStorage.tire,
          userFromLocalStorage.health,
          userFromLocalStorage.fame,
          userFromLocalStorage.hapiness,
          userFromLocalStorage.money,
        ),
      );
    }
  }, []);

  const createUser = (name, surname, tire, health, fame, hapiness, money) => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (!userFromLocalStorage) {
      const newUser = new User(
        name,
        surname,
        tire,
        health,
        fame,
        hapiness,
        money,
      );
      setUser(newUser);
      newUser.updateLocalStorage();
    }
  };

  const updateMoney = (newMoney) => {
    user.updateMoney(newMoney);
    setUser({ ...user });
    user.updateLocalStorage();
  };

  const updateUserName = (newName) => {
    user.updateName(newName);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserSurname = (newSurname) => {
    user.updateSurname(newSurname);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserTire = (newTire) => {
    user.updateTire(newTire);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserHealth = (newHealth) => {
    user.updateHealth(newHealth);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserFame = (newFame) => {
    user.updateHealth(newFame);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserHapiness = (newHapiness) => {
    user.updateHealth(newHapiness);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
        updateMoney,
        updateUserName,
        updateUserFame,
        updateUserHapiness,
        updateUserSurname,
        updateUserTire,
        updateUserHealth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

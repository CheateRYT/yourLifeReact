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
          userFromLocalStorage.beauty,
          userFromLocalStorage.gender,
          userFromLocalStorage.money,
        ),
      );
    }
  }, []);

  const createUser = (
    name,
    surname,
    tire,
    health,
    fame,
    beauty,
    gender,
    money,
  ) => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (!userFromLocalStorage) {
      const newUser = new User(
        name,
        surname,
        tire,
        health,
        fame,
        beauty,
        gender,
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
  const updateUserGender = (newGender) => {
    user.updateGender(newGender);
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
    user.updateFame(newFame);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserBeauty = (newBeauty) => {
    user.updateBeauty(newBeauty);
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
        updateUserBeauty,
        updateUserSurname,
        updateUserTire,
        updateUserGender,
        updateUserHealth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

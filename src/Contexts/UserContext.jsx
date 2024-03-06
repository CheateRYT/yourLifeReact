import React, { createContext, useState, useEffect } from 'react';
import { User } from '../Classes/User';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage) {
      setUser(new User(userFromLocalStorage.name, userFromLocalStorage.money));
    }
  }, []);

  const createUser = (name, money) => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (!userFromLocalStorage) {
      const newUser = new User(name, money);
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

  return (
    <UserContext.Provider
      value={{ user, createUser, updateMoney, updateUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

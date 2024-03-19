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
          userFromLocalStorage.occupation,
          userFromLocalStorage.education,
          userFromLocalStorage.diseases,
          userFromLocalStorage.age,
          userFromLocalStorage.prisonTime,
          userFromLocalStorage.location,
          userFromLocalStorage.parents,
          userFromLocalStorage.marryPartner,
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
    occupation,
    education,
    diseases,
    age,
    prisonTime,
    location,
    parents,
    marryPartner,
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
        occupation,
        education,
        diseases,
        age,
        prisonTime,
        location,
        parents,
        marryPartner,
      );
      setUser(newUser);
      newUser.updateLocalStorage();
    }
  };
  const updateUser = (user) => {
    setUser(user);
    user.updateLocalStorage();
  };
  const updateOccupation = (newOccupation) => {
    user.updateOccupation(newOccupation);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateUserMarryPartner = (newMarryPartner) => {
    user.updateMarryPartner(newMarryPartner);
    setUser({ ...user });
    user.updateLocalStorage();
  };
  const updateEducation = (newEducation) => {
    user.updateEducation(newEducation);
    setUser({ ...user });
    user.updateLocalStorage();
  };

  const updateDiseases = (newDiseases) => {
    user.updateDiseases(newDiseases);
    setUser({ ...user });
    user.updateLocalStorage();
  };

  const updateAge = () => {
    user.updateAge();
    setUser({ ...user });
  };

  const updatePrisonTime = (newPrisonTime) => {
    user.updatePrisonTime(newPrisonTime);
    setUser({ ...user });
    user.updateLocalStorage();
  };

  const updateLocation = (newLocation) => {
    user.updateLocation(newLocation);
    setUser({ ...user });
    user.updateLocalStorage();
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
        updateOccupation,
        updateEducation,
        updateDiseases,
        updateAge,
        updatePrisonTime,
        updateLocation,
        updateUserMarryPartner,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

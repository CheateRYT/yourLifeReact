export class User {
  constructor(
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
  ) {
    this.name = name;
    this.surname = surname;
    this.money = money;
    this.tire = tire;
    this.health = health;
    this.fame = fame;
    this.beauty = beauty;
    this.prisonTime = prisonTime;
    this.gender = gender;
    this.occupation = occupation;
    this.education = education;
    this.diseases = diseases;
    this.age = age;
    this.location = location;
    this.parents = parents;
    this.marryPartner = marryPartner;
  }
  updatePrisonTime(newPrisonTime) {
    this.prisonTime = newPrisonTime;
    this.updateLocalStorage();
  }
  updateLocation(newLocation) {
    this.location = newLocation;
    this.updateLocalStorage();
  }
  updateAge(newAge) {
    this.age = newAge;
    this.updateLocalStorage();
  }
  updateOccupation(newOccupation) {
    this.occupation = newOccupation;
    this.updateLocalStorage();
  }
  updateMarryPartner(newMarryPartner) {
    this.marryPartner = newMarryPartner;
    this.updateLocalStorage();
  }
  updateDiseases(newDiseases) {
    this.diseases = newDiseases;
    this.updateLocalStorage();
  }
  updateEducation(newEducation) {
    this.education = newEducation;
    this.updateLocalStorage();
  }
  updateName(newName) {
    this.name = newName;
    this.updateLocalStorage();
  }
  updateGender(newGender) {
    this.name = newGender;
    this.updateLocalStorage();
  }
  updateTire(newTire) {
    this.tire = newTire;
    this.updateLocalStorage();
  }
  updateHealth(newHealth) {
    this.health = newHealth;
    this.updateLocalStorage();
  }
  updateFame(newFame) {
    this.fame = newFame;
    this.updateLocalStorage();
  }
  updateBeauty(newBeauty) {
    this.beauty = newBeauty;
    this.updateLocalStorage();
  }
  updateMoney(newMoney) {
    this.money = newMoney;
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    const updatedUser = {
      name: this.name,
      surname: this.surname,
      tire: this.tire,
      health: this.health,
      fame: this.fame,
      beauty: this.beauty,
      gender: this.gender,
      money: this.money,
      occupation: this.occupation,
      education: this.education,
      diseases: this.diseases,
      age: this.age,
      prisonTime: this.prisonTime,
      location: this.location,
      parents: this.parents,
      marryPartner: this.marryPartner,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  }
}

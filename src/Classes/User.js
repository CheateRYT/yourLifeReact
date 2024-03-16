export class User {
  constructor(name, surname, tire, health, fame, hapiness, money) {
    this.name = name;
    this.surname = surname;
    this.money = money;
    this.tire = tire;
    this.health = health;
    this.fame = fame;
    this.hapiness = hapiness;
  }

  updateName(newName) {
    this.name = newName;
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
  updateHapiness(newHapiness) {
    this.hapiness = newHapiness;
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
      hapiness: this.hapiness,
      money: this.money,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  }
}

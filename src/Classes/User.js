export class User {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }

  updateName(newName) {
    this.name = newName;
    this.updateLocalStorage();
  }

  updateMoney(newMoney) {
    this.money = newMoney;
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    const updatedUser = { name: this.name, money: this.money };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  }
}

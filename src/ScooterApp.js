const Scooter = require("./Scooter");
const User = require("./User");

class ScooterApp {
  // ScooterApp code here
  stations = {
    "Battersea Power Station": [],
    "London Bridge": [],
    Victoria: [],
    Piccadilly: [],
    Richmond: [],
  };

  registeredUsers = {};

  registerUser(username, password, age) {
    const newUser = new User(username, password, age);
    const currentUserName = newUser.username;

    if (this.registeredUsers.hasOwnProperty(currentUserName)) {
      throw new Error("This user is already registered.");
    }

    if (newUser.age < 18) {
      throw new Error("This user is too young to register.");
    }

    if (
      !this.registeredUsers.hasOwnProperty(currentUserName) &&
      newUser.age >= 18
    ) {
      this.registeredUsers[currentUserName] = newUser;
    }
    console.log("A new user has been registered.");
    return newUser;
  }

  loginUser(username, password) {}
  logoutUser(username) {}
  createScooter(station) {}
  dockScooter(scooter, station) {}
  rentScooter(scooter, user) {}

  print() {
    console.log("Stations: ", this.stations);
    console.log("Registered Users: ", this.registeredUsers);
  }
}
// const scooterApp = new ScooterApp();
// scooterApp.registerUser("Joe Bloggs", "test123", 21);
// scooterApp.print();

module.exports = ScooterApp;

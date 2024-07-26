const { describe, expect, test, it } = require("@jest/globals");

const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  it("should return instance of User", () => {
    const scooterApp = new ScooterApp();
    const response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  it("should throw an error if the user is younger than 18", () => {
    const scooterApp = new ScooterApp();
    
    function tryToLogYoungerUser() {
      scooterApp.registerUser("Anna Tas", "test123", 16);
    }
    expect(tryToLogYoungerUser).toThrow("This user is too young to register.");
  });

  it("should throw an error if the user is already registered", () => {
    const scooterApp = new ScooterApp();
    const response = scooterApp.registerUser("Joe Bloggs", "test123", 21);

    function tryToLogRegisteredUser() {
      scooterApp.registerUser("Joe Bloggs", "test123", 21);
    }

    expect(tryToLogRegisteredUser).toThrow("This user is already registered.");
  });
});

// log in

// log out

// rent scooter

// dock scooter

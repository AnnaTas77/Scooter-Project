const { describe, expect, test, it } = require("@jest/globals");
const User = require("../src/User");

// User tests here
describe("User property tests", () => {
  // test username
  test("the username should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.username).toBe("string");
  });
  // test password
  test("the password should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.username).toBe("string");
  });

  // test age
  test("username should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.username).toBe("string");
  });
});

// test login
describe("Testing User Login Method", () => {
  test("should login the user when they provide a correct password", () => {
    const user = new User("Joe Bloggs", "test123", 21);

    user.login("test123");

    expect(user.loggedIn).toBe(true);
  });

  test("throws an error if the password is incorrect", () => {
    const user = new User("Joe Bloggs", "password", 21);

    function tryLogin() {
      user.login("wrongpass");
    }

    expect(tryLogin).toThrow("Incorrect password.");
  });
});

// test logout

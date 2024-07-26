const { describe, expect, test, it } = require("@jest/globals");
const Scooter = require("../src/Scooter");
const User = require("../src/User");

// typeof scooter === object
describe("Scooter class", () => {
  const scooter = new Scooter("Battersea Power Station");
  test("Scooter class should create Scooter instance", () => {
    expect(scooter).toBeInstanceOf(Scooter);
  });
  test("Scooter class should have a station property, which is a string", () => {
    expect(scooter.station).toBe("Battersea Power Station");
  });
  test("Scooter class should have a serial property, which is a number", () => {
    expect(typeof scooter.serial).toBe("number");
  });
  test("Scooter class should have a charge property, which is a number", () => {
    expect(typeof scooter.charge).toBe("number");
  });
  test("Scooter class should have a isBroken property, which is a boolean", () => {
    expect(typeof scooter.isBroken).toBe("boolean");
  });
});

// Method tests
describe("Scooter class methods", () => {
  it("accepts user instance of the User class as an argument", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);
    scooter.rent(user1);
    expect(scooter.user).toEqual(user1);
  });

  it("assigns a scooter to a user if it is charged and not broken", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);

    scooter.rent(user1);

    expect(scooter.station).toBeNull();
    expect(scooter.user).toBe(user1);
  });

  it("throws an error if the scooter is not charged", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);

    scooter.charge = 10;

    function attemptRental() {
      scooter.rent(user1);
    }

    expect(attemptRental).toThrow();
    expect(scooter.station).toBe("Battersea Power Station");
    expect(user1.loggedIn).toBe(false);
    expect(scooter.user).toBeNull();
  });
  test("should first", () => {});
  // dock method
  // requestRepair method
  // charge method
});

class Scooter {
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = user;
    } else {
      throw new Error();
    }
  }

  dock(station) {}

  // BONUS
  // recharge() {}
  // requestRepair() {}
}

module.exports = Scooter;

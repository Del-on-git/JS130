class Clock {
  constructor(currHour, currMin, currTime) {
    this.currHour = currHour;
    this.currMin = currMin;
    this.currTime = currTime;
  }

  static at(hour = 0, minute = 0) {
    let hours = (hour < 10 ? `0${hour}` : `${hour}`);
    let minutes = (minute < 10 ? `0${minute}` : `${minute}`);

    let currHour = hour;
    let currMin = minute;
    let currTime = `${hours}:${minutes}`;

    return new Clock(currHour, currMin, currTime);
  }

  add(minutes) {
    let hours = 0;

    while (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }

    this.currMin += minutes;
    if (this.currMin >= 60) {
      hours += 1;
      this.currMin -= 60;
    }

    this.currHour += hours;
    if (this.currHour >= 24) {
      this.currHour %= 24;
    }

    minutes = (this.currMin < 10 ? `0${this.currMin}` : `${this.currMin}`);
    hours = (this.currHour < 10 ? `0${this.currHour}` : `${this.currHour}`);

    this.currTime = `${hours}:${minutes}`;

    return this;
  }

  subtract(minutes) {
    let hours = 0;

    while (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }

    this.currMin -= minutes;
    if (this.currMin <= 0) {
      this.currHour -= 1;
      this.currMin += 60;
    }

    this.currHour -= hours;
    while (this.currHour < 0) {
      this.currHour += 24;
    }

    minutes = (this.currMin < 10 ? `0${this.currMin}` : `${this.currMin}`);
    hours = (this.currHour < 10 ? `0${this.currHour}` : `${this.currHour}`);

    this.currTime = `${hours}:${minutes}`;

    return this;
  }

  isEqual(otherClock) {
    return this.currTime === otherClock.currTime;
  }

  toString() {
    return this.currTime;
  }
}


module.exports = Clock;
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  _determineLastDay() {
    let date;
    if (this.month === 12) {
      date = new Date(`${this.year + 1}-01`);
    } else {
      date = new Date(`${this.year}-${this.month + 1}-1`);
      date.setDate(date.getDate() - 1);
    }

    return date.getDate();
  }

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let period = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
      last: Number.POSITIVE_INFINITY,
      teenth: [13, 14, 15, 16, 17, 18, 19]
    };

    let dayIdent = days.indexOf(weekday);
    let targetDate = period[schedule];

    let encounterCount = 1;
    let lastDayOfMonth = this._determineLastDay();
    for (let day = 1; day <= lastDayOfMonth; day++) {
      let workingDate = new Date(`${this.year}-${this.month}-${day}`);
      if (workingDate.getDay() === dayIdent) {
        if (schedule === 'teenth' && targetDate.includes(workingDate.getDate())) {
          this.meeting = workingDate;
          break;
        } else if (encounterCount === targetDate) {
          this.meeting = workingDate;
          break;
        } else if (schedule === 'last'
            && lastDayOfMonth - workingDate.getDate() < 7) {
          this.meeting = workingDate;
          break;
        } else {
          encounterCount++;
        }
      }
    }

    if (this.meeting instanceof Date) {
      this.meeting.setHours(0, 0, 0);
    } else {
      return null;
    }

    return this;
  }

  toString() {
    return this.meeting.toString();
  }
}

module.exports = Meetup;
// import { hydrationData } from '../src/sampleData.js';

export default class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  // constructor(idData) {
  //   this.hydrationData = hydrationData;
  // }

  // getUserData(id) {
  //   this.userHydration = this.hydrationData.filter(user => user.userID === id);
  // }

  getTotalAverageDrank() {
    const total = this.userHydration.reduce((sum, day) => {
      sum += day.numOunces;
      return sum;
    }, 0)
    return Math.floor(total / this.userHydration.length);
  }

  getOzDrank(date) {
    console.log(date)
    const day = this.hydrationData.find(user => user.date === date);
    return day.numOunces;
  }

  // getWeeklyDrank(start, end) {

  // }

}

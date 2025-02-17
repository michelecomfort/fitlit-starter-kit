import User from "./User";

export default class UserRepository {
  constructor() {
    this.users = [];
    this.activeUser = null;
  };

  buildUserRepo(dataManager, userData) {
    this.users = userData.map(user => {
      const filteredHydration = dataManager.filterData(user.id, 'hydration');
      const filteredSleep = dataManager.filterData(user.id, 'sleep');
      const filteredActivity = dataManager.filterData(user.id, 'activity');
      return new User(user, filteredHydration, filteredSleep, filteredActivity);
    });
    this.users.forEach(user => user.findFriends(this.users));
  };

  retrieveUser(id) {
    return this.users.find(user => user.id === id);
  };

  calculateAverageStepGoal() {
    const total = this.users.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum;
    }, 0);
    return total / this.users.length;
  };

  calculateAllUserAverageSleepQuality(sleepData) {
    const allSleepAverage = sleepData.reduce((sum, user) => {
      sum += user.sleepQuality;
      return sum;
    }, 0);
    return Math.round(allSleepAverage / sleepData.length * 10) / 10;
  };

  filterToday(date, data) {
    return data.filter(day => day.date === date);
  };

  calculateAllUserAverage(date, data, activity) {
    const filteredData = this.filterToday(date, data);
    const total = filteredData.reduce((acc, user) => {
      switch (activity) {
        case 'steps':
          acc += user.numSteps;
          break;
        case 'stairs':
          acc += user.flightsOfStairs;
          break;
        case 'minutes':
          acc += user.minutesActive;
          break;
      }
      return acc;
    }, 0)
    return Math.round(total / filteredData.length);
  };
};

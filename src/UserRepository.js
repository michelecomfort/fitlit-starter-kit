import User from "./User";
import DataManager from './DataManager'

export default class UserRepository {
  constructor() {
    this.users = [];
  }

  buildUserRepo(dataManager, userData, hydrationData, sleepData, activityData) {
    this.users = userData.map(user => {
      const filteredHydration = dataManager.filterData(user.id, 'hydration')
      const filteredSleep = dataManager.filterData(user.id, 'sleep')
      const filteredActivity = dataManager.filterData(user.id, 'activity')
      return new User(user, filteredHydration, filteredSleep, filteredActivity);

    })
  }

  retrieveUser(id) {
    return this.users.find(user => user.id === id);
  }

  calculateAverageStepGoal() {
    const total = this.users.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum;
    }, 0);
    return total / this.users.length;
  }
}

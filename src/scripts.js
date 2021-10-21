import './css/styles.css';
// import userData from './data/users';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import {
  getUserData,
  getSleepData,
  getActivityData,
  getHydrationData,

} from './fetch'
import DataManager from './DataManager'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


// Query Selectors
const userProfile = document.querySelector('#userProfile');
const greeting = document.querySelector('h1');
const stepGoals = document.querySelector('#stepGoals');
const waterStats = document.getElementById('waterStats')


// Event Listeners
// window.addEventListener('load', renderDOM);


// Global Variables

const userRepo = new UserRepository();
const dataManager = new DataManager();
// let data;

// Functions
const allData = Promise.all([getUserData(), getSleepData(), getActivityData(), getHydrationData()])

const retrieveAllData = (data) => {
  allData.then(data => {
    parseData(data);
    renderDOM();
  })
}

const parseData = (data) => {
  // instantiate Hydration & Sleep classes here????
  dataManager.setUserData(data[0].userData);
  dataManager.setSleepData(data[1].sleepData);
  dataManager.setActivityData(data[2].activityData)
  dataManager.setHydrationData(data[3].hydrationData)

}

const renderDOM = () => {
  const data = Object.values(dataManager.userData);
  // everything
  const hydrationData = Object.values(dataManager.hydrationData);
  // console.log(hydrationData)
  const sleepData = Object.values(dataManager.sleepData);
  const activityData = Object.values(dataManager.activityData);

  userRepo.buildUserRepo(dataManager, data, hydrationData, sleepData, activityData);

  const randomUser = userRepo.retrieveUser(getRandomIndex(userRepo.users));

  // parseHydrationData(randomUser.id);

  greetUser(randomUser);
  displayProfileInfo(randomUser);
  displayStepInfo(randomUser);
  displayHydrationInfo(randomUser)
};

// these operations need to be moved somewhere else.
// const parseHydrationData = (id) => {
//   const hydration = new Hydration(dataManager.hydrationData);
//
//   // hydration.getUserData(id);
//   console.log(hydration.userHydration);
//   console.log(hydration.getTotalAverageDrank());
//   console.log(hydration.getOzDrank('2020/01/21'));
// }

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length + 1);
}

const greetUser = (user) => {
  greeting.innerText = `Welcome, ${user.returnFirstName()}!`;
}

const displayProfileInfo = (user) => {
  userProfile.innerHTML = `
  <p>Name: ${user.name}</p>
  <p>Address: ${user.address}</p>
  <p>Email: ${user.email}</p>
  <p>Member Since: Oct 2021</p>
`
}

const displayStepInfo = (user) => {
  stepGoals.innerHTML = `
    <p>${user.dailyStepGoal} steps/day</p>
    <p>${userRepo.calculateAverageStepGoal()} steps/day</p>
    `
}

const displayHydrationInfo = (user) => {
  console.log(user.hydrationData)
  waterStats.innerHTML = `
  <p>${user.hydrationData.getOzDrank('2020/01/21')}oz</p>
  `
}



retrieveAllData()

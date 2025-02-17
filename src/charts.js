import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const activityCalendar = document.querySelector('#minutesCanvas').getContext('2d');
const flightsCalendar = document.querySelector('#flightsCanvas').getContext('2d');
const waterCalendar = document.querySelector('#waterCanvas').getContext('2d');
const sleepCalendar = document.querySelector('#sleepCanvas').getContext('2d');
const stepCalendar = document.querySelector('#stepsCanvas').getContext('2d');

const generateMinutesActiveChart = (user) => {
  new Chart(activityCalendar, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [{
        label: 'active minutes',
        data: user.activityData.getWeekOfActivityData('2020/01/15', 'minutes'),
        backgroundColor: '#FC6F7F',
        borderColor: '#FC6F7F',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#ffffff'
          },
        }
      },
      scales: {
        y: {
          ticks: {
            color: ['#ffffff'],
            stepSize: 50
          },
          beginAtZero: true,
          min: 0,
          max: 300,
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          }
        },
        x: {
          ticks: {
            color: ['#ffffff']
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      }
    },
  })
};

const generateStairsChart = (user) => {
  new Chart(flightsCalendar, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [{
        label: 'flights of stairs',
        data: user.activityData.getWeekOfActivityData('2020/01/15', 'stairs'),
        backgroundColor: '#FC6F7F',
        borderColor: '#FC6F7F',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#ffffff'
          },
        }
      },
      scales: {
        y: {
          ticks: {
            color: ['#ffffff'],
            stepSize: 10,
          },
          beginAtZero: true,
          min: 0,
          max: 50,
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          }
        },
        x: {
          ticks: {
            color: ['#ffffff']
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      }
    },
  })
};

const generateStepsChart = (user) => {
  new Chart(stepCalendar, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [{
        label: 'number of steps',
        data: user.activityData.getWeekOfActivityData('2020/01/15', 'steps'),
        backgroundColor: '#FC6F7F',
        borderColor: '#FC6F7F',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#ffffff'
          },
        }
      },
      scales: {
        y: {
          ticks: {
            color: ['#ffffff'],
            stepSize: 3000
          },
          beginAtZero: true,
          min: 0,
          max: 15000,
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          }
        },
        x: {
          ticks: {
            color: ['#ffffff']
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      }
    },
  })
};

const generateWaterChart = (user) => {
  new Chart(waterCalendar, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [{
        label: 'oz of water',
        data: user.getWeeklyStats('2020/01/15', 'hydration', 'numOunces'),
        backgroundColor: '#FC6F7F',
        borderColor: '#FC6F7F',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#ffffff'
          },
        }
      },
      scales: {
        y: {
          ticks: {
            color: ['#ffffff'],
            stepSize: 20,
          },
          beginAtZero: true,
          min: 0,
          max: 100,
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          }
        },
        x: {
          ticks: {
            color: ['#ffffff'],
          },
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      }
    },
  })
};

const generateSleepChart = (user) => {
  new Chart(sleepCalendar, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [
        {
          label: 'hours',
          data: user.getWeeklyStats('2020/01/15', 'sleep', 'hoursSlept'),
          backgroundColor: '#FC6F7F',
          borderColor: '#FC6F7F',
          borderWidth: 2
        },
        {
          label: 'quality',
          data: user.getWeeklyStats('2020/01/15', 'sleep', 'sleepQuality'),
          backgroundColor: '#FF9E2D',
          borderColor: '#FF9E2D',
          borderWidth: 2
        }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#ffffff',
            padding: 15,
          },
        }
      },
      scales: {
        y: {
          ticks: {
            color: ['#ffffff'],
            stepSize: 6,
          },
          beginAtZero: true,
          min: 0,
          max: 12,
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          }
        },
        x: {
          ticks: {
            color: ['#ffffff'],
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      }
    },
  })
};

export {
  generateStairsChart,
  generateMinutesActiveChart,
  generateWaterChart,
  generateSleepChart,
  generateStepsChart
}

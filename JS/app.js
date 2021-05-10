'use strict'

let hours = [
  `6am: ${} cookies`,
  `7am: ${} cookies`,
  `8am: ${} cookies`,
  `9am: ${} cookies`,
  `10am: ${} cookies`,
  `11am: ${} cookies`,
  `12pm: ${} cookies`,
  `1pm: ${} cookies`,
  `2pm: ${} cookies`,
  `3pm: ${} cookies`,
  `4pm: ${} cookies`,
  `5pm: ${} cookies`,
  `6pm: ${} cookies`,
  `7pm: ${} cookies`,
  `total: ${} cookies`
]

const Seattle = {
  MinCust: 23,
  maxCust: 65,
  cookieCust: 6.3,
}

const Tokyo = {
  MinCust: 3,
  maxCust: 24,
  cookieCust: 1.2,
}

const Dubai = {
  MinCust: 11,
  maxCust: 38,
  cookieCust: 3.7,
}

const Paris = {
  MinCust: 20,
  maxCust: 38,
  cookieCust: 2.3,
}

const Lima = {
  MinCust: 2,
  maxCust: 16,
  cookieCust: 4.6,
}

// include:
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
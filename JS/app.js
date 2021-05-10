'use strict'

 let hours = [
  '6am: ',
  '7am: ',
  '8am: ',
  '9am: ',
  '10am: ',
  '11am: ',
  '12pm: ',
  '1pm: ',
  '2pm: ',
  '3pm: ',
  '4pm: ',
  '5pm: ',
  '6pm: ',
  '7pm: ',
  'total: '
 ]

const Seattle = {
  minCust: 23,
  maxCust: 65,
  cookieCust: 6.3,
  dailyCust: function() {
    let hourCust = []
    let hourlyCust = []
    for (let i=0; i < hours.length - 1; i++) {
      hourCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
      hourlyCust[i] = hours [i] + hourCust[i] + ' cookies'
    }
    console.log(hourlyCust)
  }
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
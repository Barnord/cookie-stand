'use strict'

 let dailyHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'total: ']

 let locations = []

function City (name, minCust, maxCust, cookieCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieCust = cookieCust;
  this.hours = dailyHours;
  this.hourlyCust = [];
  this.hourlyCookie = [];
  locations.push()
}

function cityList(location, name, minCust, maxCust, cookieCust) {
  let location = new City(name, minCust, maxCust, cookieCust)
}

const seattle = new City('Seattle', 23, 65, 6.3)
const tokyo = new City('Tokyo', 3, 24, 1.2)
const dubai = new City('Dubai', 11, 38, 3.7)
const paris = new City('Paris', 20, 38, 2.3)
const lima = new City('Lima', 2, 16, 4.6)

function getCustomers(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}

City.prototype.daySim = function() {
  let sum = 0
  for (let i=0; i < this.hours.length - 1; i++) {
    this.hourlyCust[i] = getCustomers(this.minCust, this.maxCust);
    this.hourlyCookie[i] = Math.round(this.hourlyCust[i] * this.cookieCust);
    sum += this.hourlyCust[i]
    console.log(this.hourlyCust[i], this.hourlyCookie[i], sum);
  }
  this.hourlyCust[this.hours.length-1] = sum
  this.hourlyCookie[this.hours.length-1] = Math.round(sum * this.cookieCust)
  console.log(this.hourlyCust, this.hourlyCookie)
  return this.hourlyCust, this.hourlyCookie
}

const Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookieCust: 6.3,
  hours: dailyHours,
  hourlyCust: [],
  hourlyCookie: [],
  dailyCust: function() {
    let hourCust = []
    let sumCust = 0
    for (let i=0; i < this.hours.length - 1; i++) {
      hourCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      sumCust = sumCust + hourCust[i];
      this.hourlyCust[i] = this.hours[i] + hourCust[i] + ' customers';
      console.log(this.hourlyCust[i]);
      this.hourlyCookie[i] = this.hours[i] + Math.round(hourCust[i] * this.cookieCust) + ' cookies';
    }
    this.hourlyCust[this.hours.length-1] = `${this.hours[this.hours.length -1]}${sumCust} customers`;
    this.hourlyCookie[this.hours.length-1] = `${this.hours[this.hours.length -1]}${Math.round(sumCust * this.cookieCust)} cookies`;
    console.log(this.hourlyCust);
    console.log(this.hourlyCookie);
  },
}

const Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  cookieCust: 1.2,
  hours: dailyHours,
  hourlyCust: [],
  hourlyCookie: [],
  dailyCust: function() {
    let hourCust = []
    let sumCust = 0
    for (let i=0; i < this.hours.length - 1; i++) {
      hourCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      sumCust = sumCust + hourCust[i];
      this.hourlyCust[i] = this.hours[i] + hourCust[i] + ' customers';
      console.log(this.hourlyCust[i]);
      this.hourlyCookie[i] = this.hours[i] + Math.round(hourCust[i] * this.cookieCust) + ' cookies';
    }
    this.hourlyCust[this.hours.length-1] = `${this.hours[this.hours.length -1]}${sumCust} customers`;
    this.hourlyCookie[this.hours.length-1] = `${this.hours[this.hours.length -1]}${Math.round(sumCust * this.cookieCust)} cookies`;
    console.log(this.hourlyCust);
    console.log(this.hourlyCookie);
  },
}

const Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  cookieCust: 3.7,
  hours: dailyHours,
  hourlyCust: [],
  hourlyCookie: [],
  dailyCust: function() {
    let hourCust = []
    let sumCust = 0
    for (let i=0; i < this.hours.length - 1; i++) {
      hourCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      sumCust = sumCust + hourCust[i];
      this.hourlyCust[i] = this.hours[i] + hourCust[i] + ' customers';
      console.log(this.hourlyCust[i]);
      this.hourlyCookie[i] = this.hours[i] + Math.round(hourCust[i] * this.cookieCust) + ' cookies';
    }
    this.hourlyCust[this.hours.length-1] = `${this.hours[this.hours.length -1]}${sumCust} customers`;
    this.hourlyCookie[this.hours.length-1] = `${this.hours[this.hours.length -1]}${Math.round(sumCust * this.cookieCust)} cookies`;
    console.log(this.hourlyCust);
    console.log(this.hourlyCookie);
  },
}

const Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  cookieCust: 2.3,
  hours: dailyHours,
  hourlyCust: [],
  hourlyCookie: [],
  dailyCust: function() {
    let hourCust = []
    let sumCust = 0
    for (let i=0; i < this.hours.length - 1; i++) {
      hourCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      sumCust = sumCust + hourCust[i];
      this.hourlyCust[i] = this.hours[i] + hourCust[i] + ' customers';
      console.log(this.hourlyCust[i]);
      this.hourlyCookie[i] = this.hours[i] + Math.round(hourCust[i] * this.cookieCust) + ' cookies';
    }
    this.hourlyCust[this.hours.length-1] = `${this.hours[this.hours.length -1]}${sumCust} customers`;
    this.hourlyCookie[this.hours.length-1] = `${this.hours[this.hours.length -1]}${Math.round(sumCust * this.cookieCust)} cookies`;
    console.log(this.hourlyCust);
    console.log(this.hourlyCookie);
  },
}

const Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  cookieCust: 4.6,
  hours: dailyHours,
  hourlyCust: [],
  hourlyCookie: [],
  dailyCust: function() {
    let hourCust = []
    let sumCust = 0
    for (let i=0; i < this.hours.length - 1; i++) {
      hourCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      sumCust = sumCust + hourCust[i];
      this.hourlyCust[i] = this.hours[i] + hourCust[i] + ' customers';
      console.log(this.hourlyCust[i]);
      this.hourlyCookie[i] = this.hours[i] + Math.round(hourCust[i] * this.cookieCust) + ' cookies';
    }
    this.hourlyCust[this.hours.length-1] = `${this.hours[this.hours.length -1]}${sumCust} customers`;
    this.hourlyCookie[this.hours.length-1] = `${this.hours[this.hours.length -1]}${Math.round(sumCust * this.cookieCust)} cookies`;
    console.log(this.hourlyCust);
    console.log(this.hourlyCookie);
  },
}

Seattle.dailyCust()
Tokyo.dailyCust()
Dubai.dailyCust()
Paris.dailyCust()
Lima.dailyCust()

const dataDiv = document.getElementById('data');

function printData(city) {
  const articleElem = document.createElement('article');
  dataDiv.appendChild(articleElem);

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = city.name;
  articleElem.appendChild(h2Elem);

  const customerUl = document.createElement('ul');
  articleElem.appendChild(customerUl);

  for (let i=0; i < city.hourlyCust.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = city.hourlyCust[i];
    customerUl.appendChild(liElem);
  }

  const cookiesUl = document.createElement('ul');
  articleElem.appendChild(cookiesUl);

  for (let i=0; i < city.hourlyCookie.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = city.hourlyCookie[i];
    cookiesUl.appendChild(liElem);
  }
}

printData(Seattle)
printData(Tokyo)
printData(Dubai)
printData(Paris)
printData(Lima)

// include:
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
'use strict'

 let dailyHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'total: ']
let hourlySums = []

const seattle = new City('Seattle', 23, 65, 6.3)
const tokyo = new City('Tokyo', 3, 24, 1.2)
const dubai = new City('Dubai', 11, 38, 3.7)
const paris = new City('Paris', 20, 38, 2.3)
const lima = new City('Lima', 2, 16, 4.6)

let locations = [seattle, tokyo, dubai, paris, lima]

const table = document.createElement('table');
document.getElementById('data').appendChild(table);

const formElem = document.getElementById('newLocationForm');
const refreshElem = document.getElementById('refresh')

function City(name, minCust, maxCust, cookieCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieCust = cookieCust;
  this.hours = dailyHours;
  this.hourlyCust = [];
  this.hourlyCookie = [];
  this.refresh;
}

City.prototype.daySim = function() {
  let sum = 0
  this.hourlyCookie=[]
  this.hourlyCust=[]
  for (let i=0; i < this.hours.length - 1; i++) {
    this.hourlyCust[i] = getCustomers(this.minCust, this.maxCust);
    this.hourlyCookie[i] = Math.round(this.hourlyCust[i] * this.cookieCust);
    sum += this.hourlyCust[i]
  }
  this.hourlyCust[this.hours.length-1] = sum
  this.hourlyCookie[this.hours.length-1] = Math.round(sum * this.cookieCust)
}

City.prototype.printRow = function() {
  const trElem = document.createElement('tr');
  table.appendChild(trElem)

  let thName = document.createElement('th')
  thName.textContent = this.name;
  trElem.appendChild(thName);

  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('id', this.name.toLowerCase() + 'Box')
  thName.appendChild(checkBox)

  for (let i=0; i<dailyHours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.hourlyCookie[i];
    trElem.appendChild(tdElem);
  }
}

function getCustomers(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}

function getTotals() {
  let sum=0
  for (let i=0; i<dailyHours.length; i++) {
    for (let j=0; j<locations.length; j++) {
      sum = sum + locations[j].hourlyCookie[i];
    }
    hourlySums[i] = sum;
    sum = 0;
  }
}

function simAll() {
  for (let i=0; i < locations.length; i++) {
    locations[i].daySim();
  }
  getTotals();
}

function printData() {

  table.innerHTML = '';

  makeHeader();

  for (let i=0; i<locations.length; i++) {
    locations[i].printRow();
  }

  makeFooter();
}

function makeHeader() {
  const theadElem = document.createElement('thead');
  table.appendChild(theadElem);

  let thName = document.createElement('th')
  thName.textContent = 'Location';
  theadElem.appendChild(thName);

  for (let i=0; i<dailyHours.length; i++) {
    const thElem = document.createElement('th');
    thElem.textContent = dailyHours[i];
    theadElem.appendChild(thElem);
  }
}

function makeFooter() {
  const theadElem = document.createElement('thead');
  table.appendChild(theadElem);

  let thName = document.createElement('th')
  thName.textContent = 'Totals';
  theadElem.appendChild(thName);

  for (let i=0; i<dailyHours.length; i++) {
    const thElem = document.createElement('th');
    thElem.textContent = hourlySums[i];
    theadElem.appendChild(thElem);
  }
}

function listLocations() {
  for (i=0; i<locations.length; i++) {
    const trElem = document.createElement('tr');
    table.appendChild(trElem);
  }
}

function createLocation(event) {
  event.preventDefault();
  let name = event.target.location.value;
  let minCust = Number(event.target.minCust.value);
  let maxCust = Number(event.target.maxCust.value);
  let cookieCust = Number(event.target.cookieCust.value);

  let newLocation = new City(name, minCust, maxCust, cookieCust);
  locations.push(newLocation)
  
  newLocation.daySim();
  getTotals();
  printData();
}

function check() {
  event.preventDefault();
  for (let i=0; i<locations.length; i++) {
    if ((document.getElementById(locations[i].name.toLowerCase() + 'Box').checked === true)) {
      locations[i].daySim();
    }
  }
  printData();
}

formElem.addEventListener('submit', createLocation);
refreshElem.addEventListener('submit', check);

simAll();
printData();
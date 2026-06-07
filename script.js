function updateDashboard(){

const cash =
document.getElementById("cash");

const netWorth =
document.getElementById("netWorth");

const income =
document.getElementById("income");

const businessCount =
document.getElementById("businessCount");

const employeeCount =
document.getElementById("employeeCount");

const propertyCount =
document.getElementById("propertyCount");

if(cash)
cash.textContent =
Math.floor(game.cash).toLocaleString();

if(netWorth)
netWorth.textContent =
Math.floor(game.netWorth).toLocaleString();

if(income)
income.textContent =
Math.floor(
game.incomePerSecond
).toLocaleString();

let totalBusinesses = 0;

for(const key in game.businesses){

totalBusinesses +=
game.businesses[key].owned || 0;

}

if(businessCount)
businessCount.textContent =
totalBusinesses;

if(employeeCount)
employeeCount.textContent =
Object.keys(
game.employees
).length;

if(propertyCount)
propertyCount.textContent =
Object.keys(
game.realEstate
).length;

}

function calculateNetWorth(){

game.netWorth =
game.cash;

for(const key in game.businesses){

const owned =
game.businesses[key].owned || 0;

const business =
businesses.find(
b => b.id === key
);

if(business){

game.netWorth +=
owned *
business.cost;

}

}

}

setInterval(() => {

game.cash +=
game.incomePerSecond;

calculateNetWorth();

updateDashboard();

},1000);

updateDashboard();
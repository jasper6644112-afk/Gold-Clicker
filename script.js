loadGame();

function updateDashboard(){

document.getElementById("cash")
.textContent =
"$" +
Math.floor(game.cash)
.toLocaleString();

document.getElementById("netWorth")
.textContent =
"$" +
Math.floor(game.netWorth)
.toLocaleString();

document.getElementById("income")
.textContent =
"$" +
Math.floor(game.incomePerSecond)
.toLocaleString();

let businessCount = 0;

for(const key in game.businesses){

businessCount +=
game.businesses[key];

}

document.getElementById(
"businessCount"
).textContent =
businessCount;

document.getElementById(
"employeeCount"
).textContent =
Object.keys(
game.employees
).length;

document.getElementById(
"propertyCount"
).textContent =
Object.keys(
game.realEstate
).length;

document.getElementById(
"achievementCount"
).textContent =
game.achievements.length;

}

function calculateNetWorth(){

let total = game.cash;

for(const key in game.businesses){

total +=
game.businesses[key] *
BUSINESS_DATA[key].cost;

}

game.netWorth = total;

}

setInterval(() => {

game.cash +=
game.incomePerSecond;

calculateNetWorth();

updateDashboard();

},1000);

recalculateIncome();

calculateNetWorth();

updateDashboard();
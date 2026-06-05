loadGame();

const moneyEl = document.getElementById("money");
const incomeEl = document.getElementById("incomePerSec");
const netWorthEl = document.getElementById("netWorth");
const businessCountEl = document.getElementById("businessCount");
const ownedEl = document.getElementById("ownedBusinesses");

function updateUI() {

moneyEl.textContent =
Math.floor(game.money).toLocaleString();

incomeEl.textContent =
"$" + game.incomePerSec.toLocaleString();

let totalBusinesses = 0;

for(const key in game.businesses){
totalBusinesses += game.businesses[key];
}

businessCountEl.textContent = totalBusinesses;

let netWorth = game.money;

for(const key in game.businesses){

netWorth +=
game.businesses[key] *
BUSINESS_DATA[key].cost;

}

netWorthEl.textContent =
"$" + Math.floor(netWorth).toLocaleString();

renderBusinesses();
}

function renderBusinesses(){

ownedEl.innerHTML = "";

let hasBusiness = false;

for(const key in game.businesses){

if(game.businesses[key] > 0){

hasBusiness = true;

const p =
document.createElement("p");

p.textContent =
BUSINESS_DATA[key].name +
" x" +
game.businesses[key];

ownedEl.appendChild(p);

}

}

if(!hasBusiness){

ownedEl.innerHTML =
"<p>No businesses yet.</p>";

}

}

function recalculateIncome(){

let income = 0;

for(const key in game.businesses){

income +=
game.businesses[key] *
BUSINESS_DATA[key].income;

}

game.incomePerSec = income;
}

function buyBusiness(type){

const business =
BUSINESS_DATA[type];

if(game.money < business.cost){

alert("Not enough money!");

return;
}

game.money -= business.cost;

game.businesses[type]++;

recalculateIncome();

updateUI();

saveGame();

}

setInterval(() => {

game.money += game.incomePerSec;

updateUI();

}, 1000);

recalculateIncome();
updateUI();
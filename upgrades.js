game.upgrades = game.upgrades || {};

function upgradeBusiness(id){

const business =
BUSINESS_DATA[id];

if(!business) return;

const currentLevel =
game.upgrades[id] || 1;

const cost =
Math.floor(
business.cost *
currentLevel *
0.5
);

if(game.cash < cost){

alert("Not enough money!");

return;

}

game.cash -= cost;

game.upgrades[id] =
currentLevel + 1;

game.incomePerSecond +=
business.income;

updateDashboard();

saveGame();

}
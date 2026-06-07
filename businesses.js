function buyBusiness(id){

const business =
BUSINESS_DATA[id];

if(!business) return;

if(game.cash < business.cost){

alert("Not enough money!");

return;

}

game.cash -= business.cost;

game.businesses[id]++;

recalculateIncome();

updateDashboard();

saveGame();

}

function recalculateIncome(){

let total = 0;

for(const id in game.businesses){

total +=
game.businesses[id] *
BUSINESS_DATA[id].income;

}

game.incomePerSecond = total;

}
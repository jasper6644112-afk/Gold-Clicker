const PROPERTY_DATA = {

house:{
name:"House",
cost:50000,
income:500
},

apartment:{
name:"Apartment",
cost:250000,
income:2500
},

mansion:{
name:"Mansion",
cost:1000000,
income:10000
},

office:{
name:"Office Building",
cost:5000000,
income:50000
}

};

game.realEstate = game.realEstate || {
house:0,
apartment:0,
mansion:0,
office:0
};

function buyProperty(type){

const property =
PROPERTY_DATA[type];

if(game.cash < property.cost){

alert("Not enough money!");

return;

}

game.cash -= property.cost;

game.realEstate[type]++;

game.incomePerSecond +=
property.income;

updateDashboard();

saveGame();

}
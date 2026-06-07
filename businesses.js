const businesses = [

{
id:"lemonade",
name:"🍋 Lemonade Stand",
cost:500,
income:5
},

{
id:"store",
name:"🏪 Convenience Store",
cost:5000,
income:50
},

{
id:"restaurant",
name:"🍔 Restaurant",
cost:25000,
income:250
},

{
id:"hotel",
name:"🏨 Hotel",
cost:1000000,
income:10000
},

{
id:"airline",
name:"✈️ Airline",
cost:50000000,
income:500000
}

];

function buyBusiness(id){

const business =
businesses.find(
b => b.id === id
);

if(!business) return;

if(game.cash < business.cost){

alert("Not enough money");

return;
}

game.cash -= business.cost;

if(!game.businesses[id]){

game.businesses[id] = {
owned:0
};

}

game.businesses[id].owned++;

game.incomePerSecond +=
business.income;

updateDashboard();

}
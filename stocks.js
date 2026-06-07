const STOCKS = {

tech:{
name:"Tech Corp",
price:100,
owned:0
},

energy:{
name:"Energy Inc",
price:250,
owned:0
},

finance:{
name:"Finance Group",
price:500,
owned:0
}

};

function buyStock(symbol){

const stock = STOCKS[symbol];

if(game.cash < stock.price){

alert("Not enough money!");

return;

}

game.cash -= stock.price;

stock.owned++;

updateDashboard();

saveGame();

}

function sellStock(symbol){

const stock = STOCKS[symbol];

if(stock.owned <= 0){

return;

}

stock.owned--;

game.cash += stock.price;

updateDashboard();

saveGame();

}

setInterval(() => {

for(const symbol in STOCKS){

const change =
(Math.random() * 10) - 5;

STOCKS[symbol].price += change;

if(STOCKS[symbol].price < 10){

STOCKS[symbol].price = 10;

}

}

},5000);
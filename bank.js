game.bankBalance = game.bankBalance || 0;
game.loanDebt = game.loanDebt || 0;

function depositMoney(amount){

if(game.cash < amount){

alert("Not enough cash!");

return;

}

game.cash -= amount;

game.bankBalance += amount;

updateDashboard();

saveGame();

}

function withdrawMoney(amount){

if(game.bankBalance < amount){

alert("Not enough bank balance!");

return;

}

game.bankBalance -= amount;

game.cash += amount;

updateDashboard();

saveGame();

}

function takeLoan(amount){

game.cash += amount;

game.loanDebt += amount;

updateDashboard();

saveGame();

}

setInterval(() => {

if(game.loanDebt > 0){

game.loanDebt *= 1.001;

}

},10000);
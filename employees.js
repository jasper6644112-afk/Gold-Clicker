const EMPLOYEE_DATA = {

cashier:{
name:"Cashier",
cost:1000,
incomeBoost:2
},

manager:{
name:"Manager",
cost:10000,
incomeBoost:20
},

director:{
name:"Director",
cost:100000,
incomeBoost:200
}

};

game.employees = game.employees || {
cashier:0,
manager:0,
director:0
};

function hireEmployee(type){

const employee =
EMPLOYEE_DATA[type];

if(game.cash < employee.cost){

alert("Not enough money!");

return;

}

game.cash -= employee.cost;

game.employees[type]++;

game.incomePerSecond +=
employee.incomeBoost;

updateDashboard();

saveGame();

}
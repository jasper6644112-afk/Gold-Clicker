function saveGame() {

localStorage.setItem(
"businessEmpireSave",
JSON.stringify(game)
);

}

function loadGame() {

const save = localStorage.getItem(
"businessEmpireSave"
);

if(save){

game = JSON.parse(save);

}

}

setInterval(saveGame, 5000);
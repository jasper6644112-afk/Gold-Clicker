function saveGame(){

localStorage.setItem(
"businessEmpireSave",
JSON.stringify(game)
);

}

function loadGame(){

const save =
localStorage.getItem(
"businessEmpireSave"
);

if(save){

const data =
JSON.parse(save);

game = data;

}

}

setInterval(saveGame,5000);
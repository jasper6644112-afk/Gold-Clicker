game.missions = game.missions || [

{
id:"earn10k",
name:"Earn $10,000",
reward:1000,
completed:false
},

{
id:"ownStore",
name:"Buy a Convenience Store",
reward:5000,
completed:false
},

{
id:"reach100k",
name:"Reach $100,000 Net Worth",
reward:10000,
completed:false
}

];

function checkMissions(){

game.missions.forEach(mission => {

if(mission.completed) return;

if(
mission.id === "earn10k" &&
game.cash >= 10000
){

mission.completed = true;
game.cash += mission.reward;

}

if(
mission.id === "ownStore" &&
game.businesses.store > 0
){

mission.completed = true;
game.cash += mission.reward;

}

if(
mission.id === "reach100k" &&
game.netWorth >= 100000
){

mission.completed = true;
game.cash += mission.reward;

}

});

}
let game = {

cash: 1000,

netWorth: 1000,

incomePerSecond: 0,

level: 1,

businesses: {
lemonade: 0,
store: 0,
restaurant: 0,
hotel: 0,
airline: 0
},

employees: {},

realEstate: {},

achievements: []

};

const BUSINESS_DATA = {

lemonade:{
name:"Lemonade Stand",
cost:500,
income:5
},

store:{
name:"Convenience Store",
cost:5000,
income:50
},

restaurant:{
name:"Restaurant",
cost:25000,
income:250
},

hotel:{
name:"Hotel",
cost:1000000,
income:10000
},

airline:{
name:"Airline",
cost:50000000,
income:500000
}

};
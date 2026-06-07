document.addEventListener("DOMContentLoaded", () => {

const buttons = document.querySelectorAll(".menu-btn");

buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn =>
btn.classList.remove("active")
);

button.classList.add("active");

const pageName =
button.textContent.trim();

const newsFeed =
document.getElementById("newsFeed");

switch(pageName){

case "🏠 Dashboard":
newsFeed.innerHTML =
"Welcome back CEO. Review your empire statistics.";
break;

case "🏢 Businesses":
newsFeed.innerHTML =
"Buy businesses and increase your income.";
break;

case "👔 Employees":
newsFeed.innerHTML =
"Hire workers to improve productivity.";
break;

case "🏠 Real Estate":
newsFeed.innerHTML =
"Purchase properties to grow your net worth.";
break;

case "📈 Stocks":
newsFeed.innerHTML =
"Invest in companies and build your portfolio.";
break;

case "🏦 Bank":
newsFeed.innerHTML =
"Manage savings and business loans.";
break;

case "🎯 Missions":
newsFeed.innerHTML =
"Complete objectives to earn rewards.";
break;

case "🏆 Leaderboard":
newsFeed.innerHTML =
"Compare your empire against top players.";
break;

}

});

});

});
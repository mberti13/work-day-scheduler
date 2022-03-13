var currentDay = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");

//Sets current date at top of page
currentDay.innerHTML = moment().format("dddd, MMMM Do");

// 
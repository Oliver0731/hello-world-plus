// JavaScript Code

//add event lister to the button
document.getElementById("btm").addEventListener("click", sayGreeting )

function sayGreeting(){
//input
let username = document.getElementById("name-in").value;
let timeOfDay = document.getElementById("time-in").value;
//process
let msg = `hello ${username}. have a great ${timeOfDay}!`;
//output
document.getElementById("outPut").innerHTML = msg;
}
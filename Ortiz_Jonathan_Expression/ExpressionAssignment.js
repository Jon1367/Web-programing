/**
 * Created by Spike1367 on 1/18/14.
 */



// Creating Assigment again after deleting with new Repositorie


// Personal

var First = prompt("(>^ ^)> { What is your First name:}");
var Last = prompt("(>^ ^)>  { What is your Last name: }");

var FullName = First +" " +  Last;

var UserNumbers = [];

var NameLength = First.length + Last.length;

prompt(" (>^ ^)> { Hello " + FullName + " it's nice to meet you. My name is Math bot let me show you what i can do.}");

console.log( FullName + " you have a total of " + NameLength + " letters in your name." )

UserNumbers[0] = prompt(" (>^ ^)> { Choose a number for A:")
UserNumbers[1] = prompt(" (>^ ^)> { Choose a number for B:")
UserNumbers[2] = prompt(" <(^ ^)> { Choose a number for C:")
UserNumbers[3] = prompt(" (^ ^) [Last one]  { Choose a number for D:")
console.log("(>^ ^)> { Your choice are: ");
console.log("A = " + UserNumbers[0]);
console.log("B = " + UserNumbers[1]);
console.log("C = " + UserNumbers[2]);
console.log("D = " + UserNumbers[3]);


var total = parseInt(UserNumbers[0]) + parseInt(UserNumbers[1]) + parseInt(UserNumbers[2]) + parseInt(UserNumbers[3]);
var fractionAddTop = parseInt(UserNumbers[0] + parseInt(UserNumbers[2]))
var fractionAddBottom = parseInt(UserNumbers[1] + parseInt(UserNumbers[4]));

var average = total / 4;

console.log(" A + B + C + D = " + total + " The average is: " + average);
console.log("Level 2! A/B + C/D = " + fractionAddTop + " / " + fractionAddBottom);
console.log(" Are you mesmerized");



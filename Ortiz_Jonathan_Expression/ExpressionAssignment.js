/**
 * Created by Spike1367 on 1/18/14.
 */



// Creating Assigment again after deleting with new Repositorie


// Personal

var First = prompt("What is your First name:");
var Last = prompt("What is your Last name:");

var FullName = First +" " +  Last;

var UserNumbers = [];

var NameLength = First.length + Last.length;

console.log("Hello " + FullName + " it's nice to meet you. My name is Math bot let me show you what i can do.")

console.log( FullName + " you have a total of " + NameLength + " letters in your name." )

UserNumbers[0] = prompt(" Choose a number for A:")
UserNumbers[1] = prompt(" Choose a number for B:")
UserNumbers[2] = prompt(" Choose a number for C:")

console.log("A = " + UserNumbers[0]);
console.log("B = " + UserNumbers[1]);
console.log("C = " + UserNumbers[2]);


var total = parseInt(UserNumbers[0]) + parseInt(UserNumbers[1]) + parseInt(UserNumbers[2]);

var average = total / 3;

console.log("")
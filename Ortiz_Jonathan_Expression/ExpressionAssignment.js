/**
 * Created by Spike1367 on 1/18/14.
 */



// Creating Assigment again after deleting with new Repositorie


// Personal

var First = prompt(" (>^ ^)> { What is your First name:}");
var Last = prompt("(>^ ^)>  { What is your Last name: }");

var FullName = First +" " +  Last;

var UserNumbers = [];

var NameLength = First.length + Last.length;

prompt(" (>^ ^)> Hello " + FullName + " it's nice to meet you. My name is Math bot let me show you what i can do.");

console.log( FullName + " you have a total of " + NameLength + " letters in your name." )

UserNumbers[0] = prompt(" (>^ ^)> { Choose a number for A:")
UserNumbers[1] = prompt(" (>^ ^)> { Choose a number for B:")
UserNumbers[2] = prompt(" <(^ ^)> { Choose a number for C:")
UserNumbers[3] = prompt(" (^ ^) [Last one]  { Choose a number for D:")
console.log("(>^ ^)> { Your choices are: ");
console.log("A = " + UserNumbers[0]);
console.log("B = " + UserNumbers[1]);
console.log("C = " + UserNumbers[2]);
console.log("D = " + UserNumbers[3]);


var total = parseFloat(UserNumbers[0]) + parseFloat(UserNumbers[1]) + parseFloat(UserNumbers[2]) + parseFloat(UserNumbers[3]);

var fractionAddTop = parseFloat(UserNumbers[0]) + parseFloat(UserNumbers[2]);
var fractionAddBottom = parseFloat(UserNumbers[1]) + parseFloat(UserNumbers[3]);
var totalfraction = parseFloat(fractionAddTop) / parseFloat(fractionAddBottom);

var fractionMuiltTop = parseFloat(UserNumbers[1]) * parseFloat(UserNumbers[2]);
var fractionMuiltBottom = parseFloat(UserNumbers[0]) * parseFloat(UserNumbers[3]);
var muiltFraction = parseFloat(fractionMuiltTop) / parseFloat(fractionMuiltBottom);


var average = total / 4;

console.log(" A + B + C + D = " + total + " The average is: " + average);
console.log(" A/B + C/D = " + fractionAddTop + " / " + fractionAddBottom + " = " + totalfraction);
console.log(" A/B * C/D = " + fractionMuiltTop + " / " + fractionMuiltBottom + " = " + muiltFraction);

// Industry
prompt(" (>^ ^)> Know to show how Math bot can keep track of your fiances for your company");

var income = prompt("(>^^)> How much does your company make per month?");
var NunmberOfEmpolyees = prompt("(>^^)> How many empolyees do you have: ");
var empolyeesSalary = prompt("(>^^)> How much do they get paid an hour:")
var Bills = prompt(("(>^^)> How much is Bills each month: "));

var YearSalary = parseFloat(empolyeesSalary) * 8 * 248; // 248 number of days in a year without weekends or holidays
var AllEmpolyeesSalary = parseFloat(YearSalary) * NunmberOfEmpolyees;
var YearIncome = parseFloat(income) * 12;
var YearBills = parseFloat(Bills) * 12;


var TotalAfterBills = parseFloat(YearIncome) - parseFloat(YearBills);
var TotalAfterEmpolyees = parseFloat(TotalAfterBills) - parseFloat(AllEmpolyeesSalary);



prompt( "(>^^)> cacualting... ");

console.log(FullName + " your company makes " + YearIncome + " a year and spends:");
console.log( "Bills = " + YearBills);
console.log(" After Bills :" + TotalAfterBills);
console.log(" A single Empolyee's salary is " + YearSalary + " All Empolyees's year salaries is " +AllEmpolyeesSalary )
console.log(" Your company has ")

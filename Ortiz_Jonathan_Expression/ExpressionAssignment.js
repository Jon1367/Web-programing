// Created by Jonathan Ortiz

// Creating Assigment again after deleting with new Repositorie

// ---Personal---
// Creating String and minipulating strings.
var First = prompt(" (>^ ^)> { What is your First name:}");
var Last = prompt("(>^ ^)>  { What is your Last name: }");
var FullName = First +" " +  Last;
var UserNumbers = [];
var NameLength = First.length + Last.length;

// Display Name of User and (>^^)>
prompt(" (>^ ^)> Hello " + FullName + " it's nice to meet you. My name is Math bot let me show you what i can do.");

// displays the total of the user's name length
console.log( FullName + " you have a total of " + NameLength + " letters in your name." )

// Array to store users input
UserNumbers[0] = prompt(" (>^ ^)> { Choose a number for A:");
UserNumbers[1] = prompt(" (>^ ^)> { Choose a number for B:");
UserNumbers[2] = prompt(" <(^ ^)> { Choose a number for C:");
UserNumbers[3] = prompt(" (^ ^)[Last one]{ Choose a number for D:");

// Display User's Inputs
console.log("(>^ ^)> { Your choices are: ");
console.log("A = " + UserNumbers[0]);
console.log("B = " + UserNumbers[1]);
console.log("C = " + UserNumbers[2]);
console.log("D = " + UserNumbers[3]);

// Total of all UserInputs
var total = parseFloat(UserNumbers[0]) + parseFloat(UserNumbers[1]) + parseFloat(UserNumbers[2]) + parseFloat(UserNumbers[3]);
var average = total / 4;

// Adding fraction
var fractionAddTop = parseFloat(UserNumbers[0]) + parseFloat(UserNumbers[2]);
var fractionAddBottom = parseFloat(UserNumbers[1]) + parseFloat(UserNumbers[3]);
var totalfraction = parseFloat(fractionAddTop) / parseFloat(fractionAddBottom);

// Muiltplying Fraction
var fractionMuiltTop = parseFloat(UserNumbers[1]) * parseFloat(UserNumbers[2]);
var fractionMuiltBottom = parseFloat(UserNumbers[0]) * parseFloat(UserNumbers[3]);
var muiltFraction = parseFloat(fractionMuiltTop) / parseFloat(fractionMuiltBottom);

// Display solution
console.log(" A + B + C + D = " + total + " The average is: " + average);
console.log(" A/B + C/D = " + fractionAddTop + " / " + fractionAddBottom + " = " + totalfraction);
console.log(" A/B * C/D = " + fractionMuiltTop + " / " + fractionMuiltBottom + " = " + muiltFraction);

// ---Industry---
prompt(" (>^ ^)> Math bot can also keep track out Company Spending:");

// Ask User for Inputs
var income = prompt("(>^^)> How much does your company make per month?");
var NunmberOfEmpolyees = prompt("(>^^)> How many empolyees do you have: ");
var empolyeesSalary = prompt("(>^^)> How much do they get paid per hour:")
var Bills = prompt(("(>^^)> How much are Bills each month: "));

// Made varaibles for year                   - 8 hours it average number of work days.
var YearSalary = parseInt(empolyeesSalary) * 8 * 248; // 248 number of days in a year without weekends or holidays
var AllEmpolyeesSalary = parseInt(YearSalary) * parseInt(NunmberOfEmpolyees);
var YearIncome = parseInt(income) * 12;
var YearBills = parseInt(Bills) * 12;

// Amount left after paying bills and empolyees
var TotalAfterBills = parseInt(YearIncome) - parseInt(YearBills);
var TotalAfterEmpolyees = parseInt(TotalAfterBills) - parseInt(AllEmpolyeesSalary);



prompt( "(>^^)> cacualting... ");

// Display info
console.log(FullName + " your company makes " + YearIncome + " a year and spends:");
console.log( "Year Bills = $" + YearBills);
console.log(" After Bills : $" + TotalAfterBills);
console.log(" A single Empolyee's salary per year  is $" + YearSalary + " Base on 8 hours a day and works five days a week.  " +
    " All Empolyees's year salaries is $" +AllEmpolyeesSalary );
console.log( FullName + " your company has a remainder of $" + TotalAfterEmpolyees);

// ---Wackly---

// Display final program
prompt(" (>^^)> Math bot is going to show you how it can run a store like  Megaton clinic from Fallout 3");

// variables buying is used for while user is in the store
var Buying = true;

// Created array for the cost and items
var items = ["Stimpak","Jet","Doctor Bag"];
var itemscost = [20, 10 , 50];

// User amount of caps from his adventures in the waste land
var caps = 3000;


var totalStimpak = 0;
var totalJet = 0;
var totaDoctorBag = 0;

var spentStimpak = 0;
var spentJet = 0;
var spentDoctorBag = 0;

// Created a a while loop to keep ask user to buy items
while(Buying){

     /// Created itemspurches to store user answer
    var itemspurches = prompt(" (>^^)> Welcome wastelander " + FullName +" to Megaton clinic here are the my item for sale:"+
     // Display user money and choices
    "\n"+ FullName + " Ammount of caps = " + caps +  "cps" + "\n" +
        "1) " + items[0]+ " cost: " + itemscost[0] +" cps" +  "\n" +
        "2) " + items[1]+ " cost: " + itemscost[1] +" cps" + "\n" +
        "3) " + items[2]+ " cost: " + itemscost[2] +" cps" + "\n" +
        "4) Cash out" );

    // If statement  used to exit the loop
    if( itemspurches == 4){Buying = false}

    //if statement to add up user answer
    if( parseInt(itemspurches) == 1){
        var ammount = prompt(items[0] + " Cost " + itemscost[0] +  " How much do you want to buy?" );
        caps = caps - itemscost[0] * parseInt(ammount);
        totalStimpak +=  parseInt(ammount);
        spentStimpak += parseInt(ammount) * parseInt(itemscost[0]);
    }else if( parseInt(itemspurches) == 2){
        var ammount2 = prompt(items[1] + " Cost " + itemscost[1] +  " How much do you want to buy?" );
        caps = caps - itemscost[1] * parseInt(ammount2);
        totalJet += parseInt(ammount2);
        spentJet += parseInt(itemscost[1]) * parseInt(ammount2);
    }else if( parseInt(itemspurches) == 3){
        var ammount3 = prompt(items[2] + " Cost " + itemscost[2] +  " How much do you want to buy?" );
        caps = caps - itemscost[2] * parseInt(ammount3);
        totaDoctorBag += parseInt(ammount3);
        spentDoctorBag += parseInt(ammount3) * parseInt(itemscost[2]);
    }

}
// Display remainder of user's caps
prompt(" You have a remainder of : " + caps + "cps" +"\n" +
    "Total Stimpak bought:" + totalStimpak +" spent : "+ spentStimpak +" cps" +  "\n" +
    "Total Jet bought: " + totalJet +"  spent :" + spentJet  +" cps " + "\n" +
    "Total Doctor Bog bought:" +totaDoctorBag +" spent: " + spentDoctorBag +" cps ");

// If statment to see if you company is doing well
if( TotalAfterEmpolyees > 0){
    console.log(" (>^^)> Good Job your company didn't go Under");
}
else if( TotalAfterEmpolyees < 0){
        console.log("(>^^)> i suggest you file for bankruptcy.");
}

// Ask if user enjoyed program
var YorN = prompt ("(>^^)> Did you Enjoy Math bot? Y or n: ")


// If state if user enter correct infromation
if( YorN == 'n' || YorN == 'N'){
    console.log(" Blame the teacher.")
}else if(YorN == 'y' || YorN == 'Y'){
    console.log(" Thank you " + FullName + " you are a wonderful person.")
}else{console.log(" Error 101: User is illiterate.");}



// variables to get user's birthday infromation
var month = prompt(" What day were you born:");
var date = prompt("What day were you born: ");
var year = prompt("what year were you born:");

// call fuction sending user's month and date and storing Daysuntillbirthday;
var day = DaysuntillBirthday(month,date);

// Display info
prompt("Hello " + name(first,last) + " your birthdays on " + DateOfBirth(month,date,year) + "\n" +
        "and " + day);


function DateOfBirth(month,date,year){

    var dateOfBirth = month + "," + date + "," + year;

    return dateOfBirth;


}

function DaysuntillBirthday (month,date){

   var currentMonth= prompt("What is the current month:");
   var currentday = prompt("What is the day of the month today:");

    var Monthbirth = month - currentMonth;
    var Daysbirth = date - currentday;

    var birth = "you have "+ Monthbirth  + "mounths and " + Daysbirth + " days untill your birthday.";

    return birth;
}
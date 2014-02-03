

// Create loop and put variables in function
var first = prompt(" What is your first name:");
var last =prompt(" What is your last name");

// variables to get user's birthday infromation
var month = prompt(" What month were you born on:");
var date = prompt("What day were you born on: ");
var year = prompt("what year were you born on:");

// call fuction sending user's month and date and storing Daysuntillbirthday;
var day = DaysuntillBirthday(month,date);

var whilebirthday = true;

// loops while user wants to check birthdays
while(whilebirthday){
    // user's choice
    var input = prompt("Hello " + name(first,last) + " what would you like to do:" +"\n" +
                       "1) Change Name" + "\n" +
                       "2) Change Birthday" + "\n" +
                       "3) Calcuate days untill birthday " + "\n" +
                       "4) Quit");

                if(input == 1){
                  changename();
                }else if(input == 2){
                    changeBirthday();
                }else if(input == 3){
                    calcutae();
                }else if(input == 4){
                  whilebirthday = false;
                }


}

// function for date of birth
function DateOfBirth(month,date,year){

    var dateOfBirth = month + "," + date + "," + year;

    return dateOfBirth;


}
// function to caculate days untill birthday
function DaysuntillBirthday (month,date){

   var currentMonth= prompt("What is the current month:");
   var currentday = prompt("What is the day of the month today:");

    var Monthbirth = month - currentMonth;
    var Daysbirth = date - currentday;

    var birth = "you have "+ Monthbirth  + "mounths and " + Daysbirth + " days untill your birthday.";

    return birth;
}
function changename(){

     first = prompt(" What is your first name:");
    last =prompt(" What is your last name:");


    return  first,last;
}
function changeBirthday (){

    month = prompt(" What day were you born:");
    date = prompt("What day were you born: ");
    year = prompt("what year were you born:");

    return true;

}
function calcutae (){
    // Display info
    prompt("Hello " + name(first,last) + " your birthdays on " + DateOfBirth(month,date,year) + "\n" +
        "and " + DaysuntillBirthday(month,date));
}
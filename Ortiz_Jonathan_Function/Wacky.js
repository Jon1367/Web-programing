

var month = prompt(" What day were you born:");
var date = prompt("What day were you born: ");
var year = prompt("what year were you born:");



prompt(DateOfBirth(month,date,year));

function DateOfBirth(month,date,year){

    var dateOfBirth = month + "," + date + "," + year;

    return dateOfBirth;


}
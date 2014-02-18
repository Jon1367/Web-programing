/*

 name: Jonathan Ortiz
 date: 2/15/2014
 * Mid Terms for PWA-1 1304
 */

// selfexcuting function
(function (){
// student objects
var studentinfo = {
    name: 'Jonathan O',
    adress: {street: "Ocean Gate", city: "Hawthorne", state: "Califriona"},
    gpa: [5.1, 7.5, 9.0]

};
var studentinfo2 = {
    name: "Don",
    adress: {street: "Goldenroad", city: "Winter park", state: "FL"},
    gpa: [8.0, 7.5, 8.5]
};

// var for html
var button = document.querySelector(".buttonred");

var studentgrade = document.querySelector("#gpa");

var studentadress = document.querySelector("#address");

var studentname = document.querySelector("#name");

var dates = document.querySelector("#date");

var mydate = new Date();

var month = mydate.getMonth() + 1;
var day = mydate.getDate();
var year = mydate.getFullYear();

var date = month + "/" + day + "/" + year;


// array for objects
var students = [studentinfo, studentinfo2];
//call function to add person
addstudent('super man', '123 Test Dr', 'Orlando', 'Florida', [3.2, 4.0, 2.2]);
addstudent('Cory ', 'Unversity Blv','Winter Springs','Florida',[5.1,8.2,7.5]);
var count = 0;
show();
count++;
function show() {

        studentname.innerHTML = "Name: " + students[count].name;
        studentadress.innerHTML = "Adress: " + students[count].adress.street + " " + students[count].adress.city + " " + students[count].adress.state;
        dates.innerHTML = "Date:" + date;
        studentgrade.innerHTML = "GPA:" + avg(students[count].gpa);


}

function addstudent(name, street, city, state, gpa) {

    var NewStudent = {
        name: name,
        adress: {street: street, city: city, state: state},
        gpa: gpa
    }
    students.push(NewStudent);

}


button.addEventListener('click', onclick);

function onclick() {
    show();
    count++;

    if(count == students.length){
        button.remove(".buttonred");
    }
}

    function avg (toAverage){
        var total = 0;
        console.log(toAverage);
        for( var i = 0; i < toAverage.length;i++){

            total += toAverage[i];

        }

       return total / toAverage.length;

    }



})();


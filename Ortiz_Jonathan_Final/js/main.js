/*

File: Final
Created by Jonathan Ortiz
Date: 4/1/2014

 */


(function(){

var students = [];

var button = document.querySelector(".buttonred");

var studentgrade = document.querySelector("#gpa");

var studentadress = document.querySelector("#address");

var studentname = document.querySelector("#name");

var dates = document.querySelector("#date");

var studentavg = document.querySelector("#gpaavg");

var mydate = new Date();

var month = mydate.getMonth() + 1;
var day = mydate.getDate();
var year = mydate.getFullYear();

var date = month + "/" + day + "/" + year;


// array for objects
var stud = new Student('James Bond', '123 Test Dr', 'Orlando', 'Florida', [7.5, 7.5, 9.1], new Date());
students.push(stud);

var stud2 = new Student('Jonathan Ortiz', '7603 park proemade drive', 'Winter Park', 'Florida', [7.5, 9.2, 2.2], new Date());
students.push(stud2);

var stud3 = new Student("Don Page"," 32792 leage of legends lane","Miami","Flordia",[8.5,7.5,2.3],new Date());
students.push(stud3);


var count = 0;

    function Student(name,street,state,city,gpa,date){

        this.name = name;
        this.adress = street + " " + state + " " + city;
        this.gpa = gpa;
        this.date = date;

    }

    Student.prototype.avg = function(grade){

        var total = 0;

        for(var i = 0;i < grade.length;i++){
            total += grade[i];
        }

         var average = total / grade.length;

        return average;
    };



    //console.log(students);

    show();

    function show(){

       for(var i = 0; i < students.length;i++){

            console.log("name: " + students[i].name);
            console.log("adress: " + students[i].adress);
            console.log("grades:" + students[i].gpa);
            console.log("Date:" + students[i].date);
            console.log("avg:" + students[i].avg(students[i].gpa));
            }

    }
    function html(){

        studentname.innerHTML = "Name: " + students[count].name;
        studentadress.innerHTML = "Adress: " + students[count].adress;
        studentgrade.innerHTML = "Grade:" + students[count].gpa;
        dates.innerHTML = "Date:" + date;
        studentavg.innerHTML = "average: " + students[count].avg(students[count].gpa);
    }

    button.addEventListener('click',onClick);

    function onClick(){

        html();
        count++;
        if(count == students.length){
            button.remove('.buttonred');
        }
    }


})();
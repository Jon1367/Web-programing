/*
File Name: Lec Day 8 Objects
Created by Jonathan Ortiz
Date:2/25/2014
 */


(function(){
//    Array.prototype.push = function(){
//        console.log("u suck");
//    }

//    Array.prototype.random = function (a,b){
//        return "Pretend it works";
//    }
    // capital S means the  function is a consutor

    // Created a prototype to add to Student and create a function
    Student.prototype.average = function(){
     console.log(this.gpa);
        var total = 0;
        for(var i = 0; i < this.gpa.length;i++){
            total += this.gpa[i];
        }
    };

    // Created a student
    var stud1 = new Student();
    stud1.name = "justin";
    // Use . syntax to acess the peortery of the object
    var stud2 = new Student();
    stud2.name = "Patrick";

    document.querySelector("#button").addEventListener('click',onClick);
    document.querySelector("#button").addEventListener('click',display);

    var studentList = [];

    function onClick(e){

        var student = new Student();
        student.name = document.querySelector("#nameInput").value;
       // studentList.push(student);
        student.gpa.push(parseInt(document.querySelector("#gradeInput1").value));
        student.gpa.push(parseInt(document.querySelector("#gradeInput2").value));
        studentList.push(student);
        student.average();

        // other way but line 30 in a var
        console.log(student.gpa);

    }

    function average(){

    }
    //console.log(studentList[0].average())

    function display(e){

        studentList.forEach(function(element){
           console.log(element.name,element.average());
        });
    }

    var interval = setInterval(update,1000);
    var seconds = 0;

    function update(){
        seconds++;
        console.log(seconds);
    }

})();
(function(){

    var stud = new Student;

    stud.grade = [10,20,30];
    var avg = stud.average();
    console.log(stud.grade);
    stud.name  = "Ortiz";
    stud.id = "2108205";
    stud.degree = "WDD";

    var stud1 = new Student;
    stud1.grade = [10,20,30];
    //var avg = stud.average();
    console.log(stud.grade);
    stud1.name  = "Divine DOn";
    stud1.id = "2102215";
    stud1.degree = "WDD";

    console.log(stud);

    stud.degree = new Degree();

    document.querySelector("#output").innerHTML = stud.name + " " + stud.average();

    // Questions
    // synatx for line
    // push , pop, slice, indexof
    // what are 6 propelty of line, strokestyle, linewidth
    // create element
    // but element into the dom
    //


})();
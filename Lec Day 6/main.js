// Created by Jonathan Ortiz

console.log("start");

(function (){

    // 2 ways to loop through an array
    //for loop
    var grades = [30,46,53];
    for(var i = 0; i < grades.length;i++){

        console.log(grades[i]);

    }
    // forEach fucntion
    grades.forEach(function(e){

        console.log(e);
        console.log(grades[e]);

    });

    var list = {
        name:'jon',
        class:'web develpment',
        grade:[9.8,8.0,20]

    };

   list.grade.forEach(function(element){
       console.log(element);
    });

    var dice = ~~(Math.random() * 11 + 2);

    if(dice == 2){
        console.log("you rolled a 2")
    }

    switch(dice){
        case 2:
            console.log("you rolled a 2");
            break;
        case 3:
            console.log("you rolled a 3");
            break;
        case 4:
            console.log(" you rolled a 4");
            break;
        default:
    }

    var food = "pizza";

    function eat(){
        var drink = "coke";
        function crap(){
            var movie = "star wars";
            console.log(drink);

        }
    }

    // 2 rules
    // all variables are gobal by defualt
    // inter funtcion have acess to outer funcion variables
})();
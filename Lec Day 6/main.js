// Created by Jonathan Ortiz

console.log("start");

(function (){

    // 2 ways to loop through an array
    //for loop
  var grades = [30,46,53];
    for(var i = 0; i < grades.length;i++){

        console.log("For loop: " + grades[i]);

    }
    // forEach fucntion
    grades.forEach(function(e){

        console.log("for each: " + e);
        //console.log(grades[e]);

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
        case 5:
            console.log(" you rolled a 5");
            break;
        case 6:
            console.log(" you rolled a 6");
            break;
        case 7:
            console.log(" you rolled a 7");
            break;
        case 8:
            console.log(" you rolled a 8");
            break;
        case 9:
            console.log(" you rolled a 9");
            break;
        case 11:
            console.log(" you rolled a 10");
            break;

        default:
    }


    eat();

    function eat(){
        var food = "pizza";
        var drink = "coke";


        console.log(food);
        //  outer function can't acess inter varibales function
        console.log(movie);
        crap();
        function crap(){
            var movie = "star wars";
            console.log("Have acess to drink varible:" +drink);
            console.log(movie);

        }
    }

    // 2 rules
    // all variables are gobal by defualt
    // inter funtcion have acess to outer funcion variables
})();
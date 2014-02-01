/**
 * Created by Jonathan Ortiz on 1/29/14.
 */



//Created variables
var first = prompt(" What is your first name:");
var last =prompt(" What is your last name");

// Array to store users numbers
var UsersNumber = [ 'a', 'b' ,'c' ];

// created a function to return username when called
function name( fullname){

    fullname = first + " " +  last;
    return fullname;
}

// Display user's full  name and enter choice for a b c
prompt(" Hello " + name() + " (>^^)> Math bot learn to use Function to solve problems: " +"\n");
         UsersNumber[0] =  prompt(" Enter a number for a:");
         UsersNumber[1] =  prompt(" Enter a number for b:");
         UsersNumber[2] =  prompt(" Enter a number for c:");

//Created true condtion for infinite loop
var game = true;
while(game){
// Created a variable choice to score user choice
var choice = prompt(" (>^^)>  What would you like to do with a , b c:" + "\n" +
        " 1)Math " + "\n" +
        " 2)Change numbers " + "\n" +
         "3)Theory of probability " + "\n"  +
        " 4)Quit");
        // if statment to call functions
        if( choice == 1 ){
            math();
        }else if(choice == 2){
            changeNumber();
        }
        else if(choice == 3){
            theory();
        }else if( choice == 4){
            quit();
        }

}
// Quit function to ask if user is done
function quit(){

    var quiter = prompt("Are you sure you want to quit? Y or N:");
                if( quiter == 'Y' || quiter == 'y'){
                    game = false;
                    //return game;
                }else if( quiter == 'N' || quiter == 'n'){
                    game = true;
                   // return game;
                }else( prompt("Error"));
}
// Do math function
function math(){

    // math variables
    var total = parseInt(UsersNumber[0]) + parseInt(UsersNumber[1]) + parseInt(UsersNumber[2]);
    var Muilt = parseInt(UsersNumber[0]) + parseInt(UsersNumber[1]) + parseInt(UsersNumber[2]);
    var divide = parseInt(UsersNumber[0]) / parseInt(UsersNumber[1])  %  parseInt(UsersNumber[2]);
    // give user a choice
    var mathchoice = prompt(" (>^^)>  What kind of math would you like to do with your numbers?" +"\n" +
                             "a) Add my numbers " + "\n" +
                             "b) Divide my numbers" + "\n" +
                             "c) Muiltiply my numbers ");
        // if statement to do math with user numbers
        if( mathchoice == 'a' || mathchoice == 'A'){
            prompt(" (>^^)> here are a + b  + c total: " + "\n"+
                       UsersNumber[0] + " + " + UsersNumber[1] + " + " + UsersNumber[2] + " = " + total);
        }else if( mathchoice == 'b' || mathchoice == 'B'){
            prompt(" (>^^)> here are a / b / c divided each other " +"\n" +
                    UsersNumber[0] + " / " + UsersNumber[1] + " / "  + " / "+ UsersNumber[2] + " = " + divide);
        }else if( mathchoice == 'c' || mathchoice == 'C'){
            prompt(" (>^^)> here are  a * b * c" + "\n" +
                     UsersNumber[0] +" x " + UsersNumber[1] + " x " + UsersNumber[2] + " = " + Muilt );
        }else{
            prompt("Error invailed input");
        }
//    // keep loop going learned after i called function it would break loop
//    game = true;
//    // return true
//    return game;
}
// Created a function to change the number
function changeNumber(){

    UsersNumber[0] =  prompt(" Enter a number for a:");
    UsersNumber[1] =  prompt(" Enter a number for b:");
    UsersNumber[2] =  prompt(" Enter a number for c:");

return true;
}
function theory(){

    var guessright = 0;
    var guesswrong = 0;

    var   theoryguessright = 0;
    var   theoryguesswrong = 0;

    var testTheory = true;

    while(testTheory){

    var random = Math.floor(math() * (3 - 1 + 1) + 1);


    var user = prompt("(>^^)>  Theory of probability is you are more likely to guess the right choice " + "\n" +
                            "if you make  a choice then change it." +"\n" +
                                "results:" + "\n" +
                                  "guess  right = " + guessright + " guess wrong = " + guesswrong + "\n" +
                                   " Theory right = " + theoryguessright + " wrong = " + theoryguesswrong + "\n" +
                                    "j) guess " + "\n" +
                                    "k) theory" + "\n" +
                                    "l) quit");

                             if(user == 'j' || user == 'J'){
                                  var guess  = prompt( "1) (>^^)> 2) (>^^)> 3) (>^^)>" + "\n"+
                                 " (>^^)> Which one is the real Math bot:");

                                 if(guess = random){
                                     prompt("You guess right my guess was:" + random);
                                     guessright++;
                                 }else if(guess != random){
                                     prompt("You guess wrong my guess was:" + random);
                                     guesswrong++;
                                 }


                             }else if(user == 'k' || user == 'K' ){
                                var guess2 = prompt("1) (>^^)> 2) (>^^)> 3) (>^^)>" + "\n"+
                                     " This time make a chose then before you enter a number change your choice " + "\n" +
                                     " (>^^)> Which of your numbers did i chose:");

                                 if(guess2 = random){
                                     prompt("You guess right" + " guess was :" + random);
                                     theoryguessright++;
                                 }else if(guess2 != random){
                                     prompt("You guess wrong" + " guess was :" + random);
                                     theoryguesswrong++;
                                 }


                             }else if( user == 'l' || user == 'L'){
                                 testTheory = false;
                             }


    }
}





/**
 * Created by Jonathan Ortiz on 1/29/14.
 */



//Created variables
var first = prompt(" What is your first name:");
var last =prompt(" What is your last name")

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

var game = true;
while(game){

var choice = prompt(" (>^^)>  What would you like to do with a , b c:" + "\n" +
        " 1)Math " + "\n" +
        " 2)Math Game " + "\n" +
        " 3)Quit");

        if( choice == 1 ){
            prompt(" Here are the your inputs"  + "\n" +
               " a + b + c  = " + math()  +"\n" +
               " a  / b / c  = " + math(this.dvide))
        }else if(choice == 2){

        }else if(choice == 3){

             quit();
        }

}

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

function math(total,Exponents,divide){

    total = parseInt(UsersNumber[0]) + parseInt(UsersNumber[1]) + parseInt(UsersNumber[2]);

    var mathchoice = prompt(" (>^^)>  What kind of math would you like to do with your numbers?" +"\n" +
                             "a) Add my numbers " + "\n" +
                             "b) Divide my numbers" + "\n" +
                             "c) Muiltiply my numbers ");

        if( mathchoice == 'a' || mathchoice == 'A'){
            prompt(" (>^^)> here are a + b  + c total: " + "\n"+
                       UsersNumber[0] + " + " + UsersNumber[1] + " + " + UsersNumber[2] + " = " + total)
        }else if( mathchoice == 'b' || mathchoice == 'B'){
            prompt(" (>^^)> here are a / b / c divided each other")
        }

    Exponents = parseInt(UsersNumber[0]) + parseInt(UsersNumber[1]) + parseInt(UsersNumber[2]);

     divide = parseInt(UsersNumber[0]) / parseInt(UsersNumber[1])  %  parseInt(UsersNumber[2]);



    return total , divide , Exponents;
}





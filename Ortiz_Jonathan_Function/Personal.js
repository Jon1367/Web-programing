/**
 * Created by Spike1367 on 1/29/14.
 */

// f


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
prompt(" Hello " + name() + " (>^^)>Math bot learn to use Function to solve problems: " +"\n");
         UsersNumber[0] =  prompt(" Enter a number for a:");
         UsersNumber[1] =  prompt(" Enter a number for b:");
         UsersNumber[2] =  prompt(" Enter a number for c:");

prompt(" (>^^)>  What would you like to do with a , b c:" + "\n" +
        " 1)Math " + "\n" +
        " 2)Math Game " + "\n" +
        " 3)Quit")



var UsrChoice = prompt(" (>^^)> Choose the next function you would like to use numbers:");

function math(total){

     //otal = parseInt(UsersNumber[0]) + parseInt(UsersNumber[1]) + parseInt(UsersNumber[2]);

    return total;
}


prompt(" Total = " + Add());

function
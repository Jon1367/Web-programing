// Assignment Conditionals

// Created
var Quit = true;

// Created varibale for User's Name
var playerName = prompt(" Enter your name:");
// Created a random choice for computer;
prompt(" (>^^)> -  Hello " + playerName + " Lets play Rock, Paper , sisscors" + "\n"+" Hit enter to countiune...)");

while(Quit){

var computerChoice = Math.floor(Math.random()* (3 - 1 + 1) + 1);

var Rock = 1;
var Paper =2;
var Sisscors = 3;


var UserChoice = prompt(" Here are your choices: " + "\n" + "1) Rock" + "\n" + "2) Paper" + "\n" + "3) Sisscors"
    + "4) Quit");

    if( parseInt(UserChoice) == Rock){
        prompt(playerName +" choices Rock");
    }else if(parseInt(UserChoice) === Paper){
        prompt(playerName + " choices Paper")
    }else if(parseInt(UserChoice) == Sisscors){
        prompt(playerName + " choices Sisscors")
    }else{ Quit = true}

    if( computerChoice == Rock){
        prompt(" Computer choices Rock");
    }else if(computerChoice === Paper){
        prompt("Computer choices Paper")
    }else if(computerChoice == Sisscors){
        prompt("Computer choices Sisscors")
    }else{ Quit = true}

    if( parseInt(UserChoice) == 4 ){ Quit = false}

}

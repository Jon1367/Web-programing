// Assignment Conditionals

// Created Quit variable for while condition
var Quit = true;

// Created varibale for User's Name
var playerName = prompt(" Enter your name:");

var UserScore = 0;
var ComputerScore = 0;
var Tie = 0;

// Display friendly message to user
prompt(" (>^^)> -  Hello " + playerName + " Lets play Rock, Paper , sisscors" + "\n"+" Hit enter to countiune...)");

// Created loop to keep game looping
while(Quit){

// Created a random choice for computer
var computerChoice = Math.floor(Math.random()* (3 - 1 + 1) + 1);

// Created variables for Rock , Paper , Sisscors
var Rock = 1;
var Paper =2;
var Sisscors = 3;

// Display options to user
var UserChoice = prompt(" Here are your choices: " + "\n" + "1) Rock" + "\n" + "2) Paper" + "\n" + "3) Sisscors"
    + "4) Quit");

    // if statements to exit loop
    if( UserChoice == 4 ){ Quit = false}

    // Display User choice
    if( parseInt(UserChoice) == Rock){
        prompt(playerName +" choices Rock");
    }else if(parseInt(UserChoice) === Paper){
        prompt(playerName + " choices Paper")
    }else if(parseInt(UserChoice) == Sisscors){
        prompt(playerName + " choices Sisscors")
    }

    // Display Computer choice
    if( computerChoice == Rock){
        prompt(" Computer choices Rock");
    }else if(computerChoice === Paper){
        prompt("Computer choices Paper");
    }else if(computerChoice == Sisscors){
        prompt("Computer choices Sisscors");
    }

    // Determine Tie
    if(parseInt(UserChoice) == Rock && computerChoice == Rock){
        prompt(" Rocks Tie");
        Tie++;
    }else if(parseInt(UserChoice) == Paper && computerChoice == Paper){
        prompt(" Papers Tie");
        Tie++
    }else if( parseInt(UserChoice) == Sisscors && computerChoice == Sisscors){
        prompt(" Sisscors Tie");
        Tie++;
    }
    if( UserChoice == 4 ){ Quit = false}


    // Determine Winner if user choices rock
    if( parseInt(UserChoice) == Rock && computerChoice == Paper){
        prompt("User losses paer covers rock  ");
        ComputerScore++;
    }else if( parseInt(UserChoice) == Rock && computerChoice == Sisscors){
        prompt("User Wins rock smashes sisscors");
        UserScore++;
    }
    // Determine Winner if user choices Paper
    if( parseInt(UserChoice) == Paper && computerChoice == Rock){
        prompt("User win paper covers rock");
        UserScore++;
    }else if( parseInt(UserChoice) == Paper && computerChoice == Sisscors){
        prompt("User loses sisscors cuts paper");
        ComputerScore++;
    }
    // Determine Winner if user choices Sisscors
    if( parseInt(UserChoice) == Sisscors && computerChoice == Rock){
        prompt("User losses rock smashes sisscors");
        ComputerScore++;
    }else if( parseInt(UserChoice) == Sisscors && computerChoice ==Paper ){
        prompt("User Wins sisscors cut paper");
        UserScore++;
    }

}

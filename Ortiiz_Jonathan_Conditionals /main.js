// Created by Jonathan Ortiz

// Assignment Conditionals

// Created Quit variable for while condition
var Quit = true;

// Created varibale for User's Name
var playerName = prompt(" Enter your name:");

// variables to hold Score
var UserScore = 0;
var ComputerScore = 0;
var Tie = 0;

// Display friendly message to user
prompt(" (>^^)> -  Hello " + playerName + " Lets play Rock, Paper , sisscors" + "\n"+" Hit enter to countiune...)");

// Created loop to keep game looping
while(Quit){

// Created a random choice for computer
var computerChoice = Math.floor(Math.random()* (3 - 1 + 1) + 1);// Formula (High - low + 1) - Low to get number 1->3

// Created variables for Rock , Paper , Sisscors
var Rock = 1;
var Paper =2;
var Sisscors = 3;

// Display options to user
var UserChoice = prompt(" (>^^)> Here are your choices: " + "\n" + "1) Rock" + "\n" + "2) Paper" + "\n" + "3) Sisscors"
    + "\n" + "4) Quit or Next game");

    // Check if user enter correct input
    if( UserChoice != Rock && UserChoice != Paper && UserChoice != Sisscors && UserChoice != 4){
        prompt(" Error 101: User did not enter correct input.Hit enter to return to choices. ")
    }

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
        prompt("(>^^)> Computer choices Rock");
    }else if(computerChoice === Paper){
        prompt("(>^^)> Computer choices Paper");
    }else if(computerChoice == Sisscors){
        prompt("(>^^)> Computer choices Sisscors");
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
        prompt("(>^^)> computer wins! paper covers rock  ");
        ComputerScore++;
    }else if( parseInt(UserChoice) == Rock && computerChoice == Sisscors){
        prompt(playerName + " wins! rock smashes sisscors.");
        UserScore++;
    }
    // Determine Winner if user choices Paper
    if( parseInt(UserChoice) == Paper && computerChoice == Rock){
        prompt(playerName +" win! paper covers rock");
        UserScore++;
    }else if( parseInt(UserChoice) == Paper && computerChoice == Sisscors){
        prompt("(>^^)> computer wins! sisscors cuts paper");
        ComputerScore++;
    }
    // Determine Winner if user choices Sisscors
    if( parseInt(UserChoice) == Sisscors && computerChoice == Rock){
        prompt("(>^^)> computer wins! rock smashes sisscors.");
        ComputerScore++;
    }else if( parseInt(UserChoice) == Sisscors && computerChoice ==Paper ){
        prompt(playerName + " Wins! sisscors cut paper.");
        UserScore++;
    }
    // Show the User The scores
    prompt(playerName + " Score = " + UserScore + "\n" +"Computer Score = " + ComputerScore + "\n"+" Tie = " + Tie  );

}

var GuessingGame = true;
var NumberOfUserGuess = 0;
var NumberOfWins = 0;

while(GuessingGame){

  var UserGuess = prompt (" (>^^)> Welcome to my Guessing Game. " + "\n" +" Guess my Number between 1 - 100" + "\n"+"4)Quit");
  var ComputerGuess = Math.floor(Math.random() * (100 + 1 -1 ) + 1);

   if( UserGuess < ComputerGuess){
       prompt(playerName + " Guess too low");
   }else if( UserChoice > ComputerGuess){
       prompt(playerName + " Guess too High Guess");
   }else if( UserChoice == ComputerGuess ){

   }

   if(UserGuess == 4){ GuessingGame = false}



}
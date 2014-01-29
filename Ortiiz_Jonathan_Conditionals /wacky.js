
var PlayingDice = true;

// variables for computer's dice
var computerSixDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var computer12dice = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var computer36dice = Math.floor(Math.random() * (36 - 1 + 1) + 1);

var playerSixDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var player12dice = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var player36dice = Math.floor(Math.random() * (36 - 1 + 1) + 1);




while(PlayingDice){
var UserDice = prompt("(>^^)> Hello " + playerName + " Lets play some dice:" + "\n" +
    "1) Roll two 6 sided dice" + "\n" +
    "2) Roll two 12 sided dice " + "\n" +
    "3) Roll two 36 sided dic " + "\n" +
    "4) Quit");

    if(UserDice == 4){ PlayingDice = false}

    if( UserDice == 1){

        if(playerSixDice > computerSixDice){
            prompt( "You Win! rolled a " + playerSixDice + " computer rolled a " + computerSixDice)
        }else if(playerSixDice < computerSixDice){
            prompt("You loss! Computer rolled a" + computerSixDice+  "  you rolled a " + playerSixDice)
        }else{
            prompt("Tie");
        }

    }else if( UserDice == 2){

    }else if( UserDice == 3){

    }else{

    }

}
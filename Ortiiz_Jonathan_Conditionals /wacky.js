
var PlayingDice = true;

//  variables for computer's dice
var computerSixDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var computer12dice = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var computer36dice = Math.floor(Math.random() * (36 - 1 + 1) + 1);

//  variables for player's dice
var playerSixDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var player12dice = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var player36dice = Math.floor(Math.random() * (36 - 1 + 1) + 1);

//  Totals for computer's dice rolls
var totalComputerSixDice = computerSixDice + computerSixDice;
var totalComputer12Dice = computer12dice + computer12dice;
var totalComputer36Dice = computer36dice + computer36dice;

//  Totals for player's die rolls
var totalPlayerSixDice = playerSixDice + playerSixDice;
var totalPlayer12Dice = player12dice + player12dice;
var totalplayer36Dice = player36dice + player36dice;


// loop as long as player wants to play dice
while(PlayingDice){
var UserDice = prompt("(>^^)> Hello " + playerName + " Lets play some dice:" + "\n" +
    "1) Roll two 6 sided dice" + "\n" +
    "2) Roll two 12 sided dice " + "\n" +
    "3) Roll two 36 sided dic " + "\n" +
    "4) Quit");

    // exit loop
    if(UserDice == 4){ PlayingDice = false}
    // If statments after ask which dice user wants to roll
    if( UserDice == 1){

        // following if statements to check who won the dice roll
        if(totalPlayerSixDice > totalComputerSixDice){
            prompt( "You Win! rolled a " + playerSixDice +"," + playerSixDice + " = " + totalPlayerSixDice +"\n" +
                  " computer rolled a " + computerSixDice + "," + computerSixDice + "=" + totalComputerSixDice)
        }else if(totalPlayerSixDice < totalComputerSixDice){
            prompt("You loss! Computer rolled a" + computerSixDice +"," + computerSixDice + "\n" +
                "  you rolled a " + playerSixDice + "," + playerSixDice)
        }else{
            prompt("Tie");
        }

    }else if( UserDice == 2){

        if(totalPlayer12Dice > totalComputer12Dice){
            prompt( "You Win! rolled a " + player12dice +","+ player12dice  +"=" + totalPlayer12Dice + "\n" +
                " computer rolled a " + computer12dice + "," + computer12dice + "=" + totalComputer12Dice)
        }else if(totalPlayer12Dice < totalComputer12Dice){
            prompt("You loss! Computer rolled a" + computer12dice +","+ computer12dice + "=" + totalComputer12Dice +"\n"  +
                "  you rolled a " + player12dice + "," + player12dice +"=" + player12dice)
        }else{
            prompt("Tie");
        }

    }else if( UserDice == 3){

        if(totalplayer36Dice > totalComputer36Dice){
            prompt( "You Win! rolled a " + player36dice +"," + player36dice + "="+ totalplayer36Dice +"\n"
                + " computer rolled a " + computer36dice + "," + computer36dice + "=" + totalComputer36Dice )
         }else if(totalplayer36Dice < totalComputer36Dice){
            prompt("You loss! Computer rolled a" + computer36dice +"," +computer36dice + "=" + totalComputer36Dice + "\n" +
                "  you rolled a " + player36dice + "," + player36dice + "=" + totalplayer36Dice)
        }else{
            prompt("Tie");
        }

    }



}
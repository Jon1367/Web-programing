
// variables for players one and two
var playername = "Jonathan";
var player1health = 100;

var playername2 = "Don";
var player2health = 100;

// created variable for loop and keep track of rounds
var round = 0;
var stopfight = true;

console.log( playername +" : " + player1health + " Start " + playername2 + " : " + player2health);
fight();

function fight (){



  while(stopfight){
        // damgae inside loop so i can keep number random
        var player2Damage = Math.floor(Math.random() * (50 - 25 + 1) + 25);
        var player1Damage = Math.floor(Math.random() * (50 - 25 + 1) + 25);

        // Display info
        console.log( playername +" : " + player1health + " Round " + round++ + playername2 + " : " + player2health);

        // player's hit each other
        player1health -= player2Damage;
        player2health -= player1Damage;

        console.log( playername + " : " + player1health + " Round " + round++  + playername2 + " : " + player2health);
      //reset
      player1Damage = '';
      player2Damage = '';
        winner();

    }

}function winner(){

        // if statement to stop if hit round 10
        if(round == 10){stopfight = false}

        // if statments to check who is the winner 
       if(player1health < 1 && player2health < 1){
          console.log("Tie");
         stopfight = false;
       }else if(player1health < 1){
        console.log(playername + "Wins");
       stopfight = false;
       }else if( player2health < 1){
        console.log(playername2 + " Wins");
       stopfight = false;
       }

}
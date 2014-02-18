

var player1 = ["Jonathan",300,20];
var player2 = ["Don",300,20];


// created variable for loop and keep track of rounds
var round = 1;
var stopfight = true;

// for round one starts with damage taken
player1[1] -= player2[2];
player2[1] -= player1[2];


console.log( player1[0] +" : " + player1[1] + " Start " + player2[0]+ " : " + player2[1]);
fight();

function fight (){



    while(stopfight){
        // damgae inside loop so i can keep number random
        player1[2] = Math.floor(Math.random() * (50 - 25 + 1) + 25);
        player2[2] = Math.floor(Math.random() * (50 - 25 + 1) + 25);

        // Display info

        // player's hit each other
        player1[1] -= player2[2];
        player2[1] -= player1[2];

        //console.log( player1[0] + " : " + player1[1] + " Round " + round++  + player2[0] + " : " + player2[1]);
        //reset
        player1[2] = '';
        player2[2] = '';

        console.log( player1[0] +" : " + player1[1] + " Round " + round++ + player2[0] + " : " + player2[1]);

        if( player1[1] <= 0 ){
            winner();
        }else if(player2[1] <= 0){
            winner();
        }
        //winner();

    }

}function winner(){

    // if statement to stop if hit round 10
    if(round == 10){stopfight = false}

    // if statments to check who is the winner
    if(player1[1] == player2[1]){
        console.log("Tie");
        stopfight = false;
    }else if(player1[1] > player2[1]){
        console.log(player1[0] + "Wins");
        stopfight = false;
    }else if( player2[1] > player1[1]){
        console.log(player2[0] + " Wins");
        stopfight = false;
    }

}
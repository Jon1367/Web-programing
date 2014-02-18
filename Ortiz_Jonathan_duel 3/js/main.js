
(function (){



var player1 = {
    name: "Jonathan",
    health: 300,
    damage: Math.floor(Math.random() * (50 - 25 + 1) + 25)
};
var player2 = {
    name: "Don",
    health: 300,
    damage: Math.floor(Math.random() * (50 - 25 + 1) + 25)
};

var players = [player1,player2];

// created variable for loop and keep track of rounds
var round = 0;

var r = document.querySelector('#round');

var p1 = document.querySelector('#kabal');
var p2 = document.querySelector('#kratos');

var button = document.querySelector('.buttonblue');



function fight() {


        // damgae inside loop so i can keep number random
        player1.damage = Math.floor(Math.random() * (50 - 25 + 1) + 25);
        player2.damage = Math.floor(Math.random() * (50 - 25 + 1) + 25);

        // Display info

        // player's hit each other
        players[0].health -= players[1].damage;
        players[1].health -= players[0].damage;

        round++;

        player1[2] = '';
        player2[2] = '';



}
function winner() {

    // if statement to stop if hit round 10
    if (round == 11) {
        button.remove("buttonblue");
     //document.getElementById("buttonblue").disabled=true;
    }

    // if statments to check who is the winner
    if (players[0].health == 0 && players[1].health== 0) {
        r.innerHTML = "Double KO Wins";
        button.remove("buttonblue");
    } else if (players[0].health < 0) {
        r.innerHTML = players[1].name + "Wins";
        button.remove("buttonblue");

    } else if (players[1].health < 0) {
        r.innerHTML = players[0].name + "Wins";
        button.remove("buttonblue");
    }

}


button.addEventListener('click', function () {

    if(round == 0){
        r.innerHTML = "Start";
    }

    r.innerHTML = round;
    fight();

    console.log(players[0].health);
    console.log(players[0].damage);
    console.log(players[1].health);
    console.log(players[1].damage);

    p1.innerHTML = players[0].name + ":" + players[0].health;
    p2.innerHTML = players[1].name + ":" + players[1].health;

    winner();




});

})();
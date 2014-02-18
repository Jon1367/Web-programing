/**
 * GUESSING GAME:
 *
 * Created By: Jonathan
 * Date: 2/12/2014
 *
 * GUESSING GAME
 */

//Game variables
(function () {


    var random = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    var input = document.querySelector("#input");
    var output = document.querySelector("#output");

    var button = document.querySelector("button");

    var numberOfGuess = 0;

    button.addEventListener('click', validate);

    function mainFunction() {
        if (input.value > random) {
            numberOfGuess++;
            output.innerHTML = " Guess to High. Guess again 1-10" + "\n" + "Number of Guess:" + numberOfGuess;

        } else if (input.value < random) {
            numberOfGuess++;
            output.innerHTML = "Guess to low. Guess again 1-10" + "\n" + "Number of Guess:" + numberOfGuess;

        }
        else if (input.value == random) {
            output.innerHTML = "You guess right.You Win!!!" + "\n" + "Number of Guess:" + numberOfGuess;
            button.remove("button");
        }if (numberOfGuess === 3) {
            button.remove("button")
        }
    }

    console.log("random number:" + random);
    console.log(input.value);

    function validate() {

        if (input.value > 0 || input.value < 10) {
            mainFunction();
        } else if (input.value < 0 || input.value > 10) {
            output.innerHTML = " invaild input Guess agian 1-10" + "\n" + "Number of Guess:" + numberOfGuess;
        } else if (isNaN(input.value) == true) {
            output.innerHTML = "You did not enter a number Guess again 1-10" + "Number of Guess" + numberOfGuess;
        }


    }

})();
/**
 * Created by Jonathan Ortiz on 1/27/14.
 */

var instore = true;

var potion = [" Health Potion","Empty Bottle","Oil" ];
var potionprice = [20,5,10];

var useritems = [];

while(instore){

var UserChoice  = prompt("(>^^)> Welcome to the Hyrlue here you can trade and purchuse items:" + "\n"
    + "1) Potions " + "\n" +
      "2) Weapons" + "\n" +
      "3) Armor " + "\n" +
      "4) Trade" + "\n" +
      "5) Quit")

    if(instore == 5){ instore = false}

    if(UserChoice == 1){

   var buypotions = prompt("(>^^)> These are the Potions i have avaiable: " + " \n" +
   "1)" + potion[0] + "cost = " + potionprice[0] + "\n" +
   "2)" + potion[1] + "cost = " + potionprice[1] + "\n" +
   "3)" + potion[2] + "cost = " + potionprice[2] + "\n");


    }


}

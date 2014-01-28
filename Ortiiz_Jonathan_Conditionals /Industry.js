/**
 * Created by Jonathan Ortiz on 1/27/14.
 */

// Array for potion and price
var potion = [" Health Potion","Empty Bottle","Oil" ];
var potionprice = [20,5,10];

// Array for Weapons
var Weapons = ["Sword","Hammer","Bow"];
var Weaponsprice = [20, 50, 30];

// Array for Armor
var Armor = ["Leather Armor","Iron Armor", "Dragon Armor"]
var ArmorPrice = [100, 200, 300];

var userMoney = 5000;

var AmountOfHealthPotion = 0;
var AmountOfPotion = 0;
var TotalHealthPotion = 0;


var TotalEmptyBottle = 0;

var instore = true;



while(instore){

var UserChoice  = prompt("(>^^)> Welcome to the Hyrlue here you can trade and purchuse items:" + "\n"
    + "1) Potions " + "\n" +
      "2) Weapons" + "\n" +
      "3) Armor " + "\n" +
      "4) Trade" + "\n" +
      "5) Quit");

    //prompt(useritems[0]);

   if(UserChoice == 5){ instore = false}

   if(UserChoice == 1){
   var buypotions = prompt("(>^^)> These are the Potions i have avaiable: " + " \n" +
    "a) " + potion[0] + " cost = $" + potionprice[0] + "\n" +
    "b) " + potion[1] + " cost = $" + potionprice[1] + "\n" +
    "c) " + potion[2] + " cost = $" + potionprice[2] + "\n");
        if( buypotions == 'a' || buypotions == 'A'){
            var amount = prompt( potion[0] + " cost " + potionprice[0] + " How many do you want?");
            userMoney += potionprice[0] * parseInt(amount);
            TotalHealthPotion += parseInt(amount);

        }else if( buypotions == 'b' || buypotions == 'B'){
            var amount2 = prompt(potion[1] +" cost " + potionprice[1]);
            userMoney += potionprice[1] + parseInt(amount2);

        }

    }else if(UserChoice == 2){
    var buyweapons = prompt("(>^^)> Here are the weapons i have:" + "\n" +
    "a) " + Weapons[0] + " cost = $" + Weaponsprice[0] + "\n" +
    "b) " + Weapons[1] + " cost = $" + Weaponsprice[1] + "\n" +
    "c) " + Weapons[2] + " cost = $" + Weaponsprice[2] + "\n");
       if(buyweapons == 'a' || buyweapons == 'b'){

       }

   }else if( UserChoice == 3){
    var weaponamount = prompt("(>^^)>  Here are your option for armor: " + "\n" +
        " a) " + Armor[0] + " cost = S" + ArmorPrice[0] + "\n" +
        " b) " + Armor[1] + " cost = S" + ArmorPrice[1] + "\n" +
        " c) " + Armor[2] + " cost = S" + ArmorPrice[2] + "\n" +
    )
   }

    if(instore == 5){ instore = false}

}

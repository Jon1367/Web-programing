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

// User's money
var userMoney = 5000;

//Amount Healthpotion
var AmountOfHealthPotion = 0;
var AmountOfPotion = 0;
var TotalHealthPotion = 0;

// Amount of  Empty bottle
var AmountOfEmptyBottle = 0;
var AmountOfpotion = 0;
var TotalEmptyBottle = 0;




var instore = true;



while(instore){

var UserChoice  = prompt("(>^^)> Welcome to the Hyrlue here you can trade and purchuse items:" + "\n" +
    playerName + " has $" + userMoney + "\n" +
     "1) Potions " + "\n" +
      "2) Weapons" + "\n" +
      "3)Trade" + "\n" +
      "4) Quit" + "\n" );

    //prompt(useritems[0]);

   if(UserChoice == 5){ instore = false}

   if(UserChoice == 1){
   var buypotions = prompt("(>^^)> These are the Potions i have avaiable: " + " \n" +
    "a) " +                      potion[0] + " cost = $" + potionprice[0] + "\n" +
    "b) " + potion[1] + " cost = $" + potionprice[1] + "\n" +
    "c) " + potion[2] + " cost = $" + potionprice[2] + "\n");
        if( buypotions == 'a' || buypotions == 'A'){
            var amount = prompt( potion[0] + " cost " + potionprice[0] + " How many do you want?");
            userMoney += potionprice[0] * parseInt(amount);
            TotalHealthPotion += parseInt(amount);

        }else if( buypotions == 'b' || buypotions == 'B'){
            var amount2 = prompt(potion[1] +" cost " + potionprice[1] + "How many do you want?");
            userMoney += potionprice[1] + parseInt(amount2);
            TotalEmptyBottle += parseInt(amount2);

        }else if( buypotions == 'c' || buypotions == 'C'){
            var amount3 = prompt(potion[2] + " cost " + potionprice[2] + "How many do you want?" );
            userMoney += potionprice[0] + parseInt(amount3);
            TotalOil += parseInt(amount3)

        }

    }else if(UserChoice == 2){
    var buyweapons = prompt("(>^^)> Here are the weapons i have:" + "\n" +
    "a) " + Weapons[0] + " cost = $" + Weaponsprice[0] + "\n" +
    "b) " + Weapons[1] + " cost = $" + Weaponsprice[1] + "\n" +
    "c) " + Weapons[2] + " cost = $" + Weaponsprice[2] + "\n");
       if(buyweapons == 'a' || buyweapons == 'b'){

       }

   }else if( UserChoice == 3){

   }


    if(instore == 5){ instore = false}

}

prompt(" You have " + userMoney + "\n" +
      "Total Health" + TotalHealthPotion + "\n" +
       "Total Empty Bottle" + TotalEmptyBottle + "\n" +
       "Total Oil" + TotalOil + "\n");
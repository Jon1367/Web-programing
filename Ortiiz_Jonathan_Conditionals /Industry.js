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


var TotalOil = 0;
// while condition
var instore = true;


// loops as long as instore is true
while(instore){
// Ask to user if the want to purches items or sell
var UserChoice  = prompt("(>^^)> Welcome to the Hyrlue here you can trade and purchuse items:" + "\n" +
    playerName + " has $" + userMoney + "\n" +
     "1) Potions " + "\n" +
      "2) Weapons" + "\n" +
      "3)Trade" + "\n" +
      "4) Quit" + "\n" );

    //prompt(useritems[0]);
    // Quit loop
   if(UserChoice == 5){ instore = false}

    // if statement to check what was the user choice
   if(UserChoice == 1){
    // Created a variable to hold which potion would you want to buy
   var buypotions = prompt("(>^^)> These are the Potions i have avaiable: " + " \n" +
    "a) " + potion[0] + " cost = $" + potionprice[0] + "\n" +
    "b) " + potion[1] + " cost = $" + potionprice[1] + "\n" +
    "c) " + potion[2] + " cost = $" + potionprice[2] + "\n");
        if( buypotions == 'a' || buypotions == 'A'){
            var amount = prompt( potion[0] + " cost " + potionprice[0] + " How many do you want?");
            userMoney -= potionprice[0] * parseInt(amount);
            TotalHealthPotion += parseInt(amount);

        }else if( buypotions == 'b' || buypotions == 'B'){
            var amount2 = prompt(potion[1] +" cost " + potionprice[1] + "How many do you want?");
            userMoney -= potionprice[1] + parseInt(amount2);
            TotalEmptyBottle += parseInt(amount2);

        }else if( buypotions == 'c' || buypotions == 'C'){
            var amount3 = prompt(potion[2] + " cost " + potionprice[2] + "How many do you want?" );
            userMoney -= potionprice[0] + parseInt(amount3);
            TotalOil += parseInt(amount3)

        }

    }else if(UserChoice == 2){
    var buyweapons = prompt("(>^^)> Here are the weapons i have:" + "\n" +
    "a) " + Weapons[0] + " cost = $" + Weaponsprice[0] + "\n" +
    "b) " + Weapons[1] + " cost = $" + Weaponsprice[1] + "\n" +
    "c) " + Weapons[2] + " cost = $" + Weaponsprice[2] + "\n");
       if( buypotions == 'a' || buypotions == 'A'){
           var want = prompt( Weapons[0] + " cost " + Weaponsprice[0] + " How many do you want?");
           userMoney -= Weapons[0] * parseInt(want);
           TotalHealthPotion += parseInt(want);

       }else if( buypotions == 'b' || buypotions == 'B'){
           var want2 = prompt(Weapons[1] +" cost " + Weaponsprice[1] + "How many do you want?");
           userMoney -= potionprice[1] + parseInt(want2);
           TotalEmptyBottle += parseInt(want2);

       }else if( buypotions == 'c' || buypotions == 'C'){
           var want3 = prompt(Weapons[2] + " cost " + Weaponsprice[2] + "How many do you want?" );
           userMoney -= potionprice[0] + parseInt(want3);
           TotalOil += parseInt(want3);

       }

   }else if( UserChoice == 3){

      var selling = true;

       while(selling){
           var sell = prompt("(>^^)> What would you like to sell" + "\n" +
           "a) Potion" + "\n" +
           "b) Weapons" + "\n" +
           "c) Quit selling");
                if( sell == 'a' || sell == 'b'){
                    var SellPotion = prompt(" Which potion would you like to sell");
                }else if( sell == "b"  || sell == 'B'){

                }else if( sell == "C" || sell == "c"){

                }

       }

   }


    if(instore == 5){ instore = false}

}

prompt(" You have " + userMoney + "\n" +
      "Total Health" + TotalHealthPotion + "\n" +
       "Total Empty Bottle" + TotalEmptyBottle + "\n" +
       "Total Oil" + TotalOil + "\n");
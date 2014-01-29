/**
 * Created by Jonathan Ortiz on 1/27/14.
 */

// Array for potion and price
var potion = [" Health Potion","Empty Bottle","Oil" ];
var potionprice = [20,5,10];

// Array for Weapons
var Weapons = ["Sword","Hammer","Bow"];
var Weaponsprice = [20, 50, 30];


// User's money
var userMoney = 5000;

//Amount Potion
var TotalHealthPotion = 0;
var TotalEmptyBottle = 0;
var TotalOil = 0;

// Amount Weapons
var totalSword = 0;
var totalHammer = 0;
var totalBow = 0;

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

    // Quit loop
   if(UserChoice == 4){ instore = false}

   // if statement to check what was the user choice 1,2,3 or 4
   if(UserChoice == 1){
   // Created a variable to hold which item would user want to buy
   var buypotions = prompt("(>^^)> These are the Potions i have avaiable: " + " \n" +
    "a) " + potion[0] + " cost = $" + potionprice[0] + "\n" +
    "b) " + potion[1] + " cost = $" + potionprice[1] + "\n" +
    "c) " + potion[2] + " cost = $" + potionprice[2] + "\n");

        // Check which item user choice then ask he want to buy muiltiple of item
        if( buypotions == 'a' || buypotions == 'A'){
            var amount = prompt( potion[0] + " cost " + potionprice[0] + " How many do you want?");
            // pay for the amount they want and substract it from user's money
            userMoney -= potionprice[0] * parseInt(amount);
            // Store amount of item user
            TotalHealthPotion += parseInt(amount);
        }else if( buypotions == 'b' || buypotions == 'B'){
            var amount2 = prompt(potion[1] +" cost " + potionprice[1] + "How many do you want?");
            userMoney -= potionprice[1] * parseInt(amount2);
            TotalEmptyBottle += parseInt(amount2);

        }else if( buypotions == 'c' || buypotions == 'C'){
            var amount3 = prompt(potion[2] + " cost " + potionprice[2] + "How many do you want?" );
            userMoney -= potionprice[0] * parseInt(amount3);
            TotalOil += parseInt(amount3)

        }else{
            prompt("Invaild Input!");
        }

    }else if(UserChoice == 2){
    var buyweapons = prompt("(>^^)> Here are the weapons i have:" + "\n" +
    "a) " + Weapons[0] + " cost = $" + Weaponsprice[0] + "\n" +
    "b) " + Weapons[1] + " cost = $" + Weaponsprice[1] + "\n" +
    "c) " + Weapons[2] + " cost = $" + Weaponsprice[2] + "\n");

       if( buyweapons == 'a' || buypotions == 'A'){
           var want = prompt( Weapons[0] + " cost " + Weaponsprice[0] + " How many do you want?");
           userMoney -= Weaponsprice[0] * parseInt(want);
           totalSword += parseInt(want);

       }else if( buyweapons == 'b' || buypotions == 'B'){
           var want2 = prompt(Weapons[1] +" cost " + Weaponsprice[1] + "How many do you want?");
           userMoney -= Weaponsprice[1] * parseInt(want2);
           totalHammer += parseInt(want2);

       }else if( buyweapons == 'c' || buypotions == 'C'){
           var want3 = prompt(Weapons[2] + " cost " + Weaponsprice[2] + "How many do you want?" );
           userMoney -= Weaponsprice[2] * parseInt(want3);
            totalBow += parseInt(want3);

       }else{
           prompt("Invaild Input")
       }

   }else if( UserChoice == 3){

      var selling = true;

       while(selling){
           var sell = prompt("(>^^)> What would you like to sell" + "\n" +
           playerName + " has $" + userMoney + "\n" +
           "a) Potion" + "\n" +
           "b) Weapons" + "\n" +
           "f) Finish selling");

                if( sell == 'a' || sell == 'A'){
                    var SellPotion = prompt(" Which potion would you like to sell " + "\n" +
                    "j) " + potion[0] + " sells for $" + potionprice[0] / 2 + "\n" +
                    "k) " + potion[1] + " sells for $ " + potionprice[1] / 2 + "\n" +
                    "l)" +  potion[2] + " sells for $ " + potionprice[2] / 2 );

                        if( SellPotion == 'j' || SellPotion == 'J'){
                          var SellHealth = prompt(" How  Health potion would you like to sell:");
                            TotalHealthPotion -= parseInt(SellHealth);
                            userMoney += potionprice[0] / 2 * parseInt(SellHealth);
                        }else if( SellPotion == 'k' || SellPotion == 'K'){
                            var SellBottle = prompt(" How  Empty Bottle would you like to sell:");
                            TotalEmptyBottle -= parseInt(SellBottle);
                            userMoney += potionprice[1] / 2 * parseInt(SellBottle);
                        }else if( SellPotion == 'l' || SellPotion == 'L'){
                            var SellOIl = prompt(" How  Oil would you like to sell:");
                            TotalOil -= parseInt(SellOIl);
                            userMoney += potionprice[2] / 2 * parseInt(SellOIl);
                        }else{
                            prompt("Error");
                        }
                }else if( sell == "b"  || sell == 'B'){

                        var SellWeapon = prompt(" Which potion would you like to sell " + "\n" +
                            "j) " + Weapons[0] + " sells for $" + Weaponsprice[0] / 2 + "\n" +
                            "k) " + Weapons[1] + " sells for $ " + Weaponsprice[1] / 2 + "\n" +
                            "l) " +  Weapons[2] + " sells for $ " + Weaponsprice[2] / 2 );

                            if( SellWeapon == 'j' || SellPotion == 'J'){
                            var SellSword = prompt(" How  many swords would you like to sell:");
                            totalSword -= parseInt(SellSword);
                            userMoney += potionprice[0] / 2 * parseInt(SellSword);
                             }else if( SellWeapon == 'k' || SellPotion == 'K'){
                            var SellHammer = prompt(" How many Hammers would you like to sell:");
                            totalHammer -= parseInt(SellHammer);
                            userMoney += potionprice[1] / 2 * parseInt(SellHammer);
                             }else if( SellWeapon == 'l' || SellPotion == 'L'){
                            var SellBow = prompt(" How many Bows would you like to sell:");
                            totalBow -= parseInt(SellBow);
                            userMoney += potionprice[2] / 2 * parseInt(SellBow);
                            }else{
                            prompt("Error");
                            }

                }else if( sell == "f" || sell == "f"){
                    selling = false;
                }

       }

   }

    // other way to exit loop if loop breaks it's useless now with dubuging done
    //if(instore == 5){ instore = false}


// Display User money and total amount of items
prompt(" You have " + userMoney + "\n" +
      "Total Health" + TotalHealthPotion + "\n" +
      "Total Empty Bottle:" + TotalEmptyBottle + "\n" +
      "Total Oil:" + TotalOil + "\n" +
      "Total Sword:" + totalSword + "\n" +
      "Total Hammer:" + totalHammer + "\n" +
      "Total Bow : " + totalBow + "\n" )
}
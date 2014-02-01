/**
 * Created by Jonathan Ortiz on 1/31/14.
 */

    // Loop condition
var MathbotMessenger = true;

// loop for program
while(MathbotMessenger){
    // Get user dessecion
    var userInput = prompt("(>^^)> Welcome to Mathbot Messenger." +"\n" +
                           "1) Info " + "\n" +
                           "2) Add Contact " + "\n" +
                           "3) Contacts " + "\n" +
                           "4) Quit");
    //if statement to quit loop
    if(userInput == 4){quit()}

    // if statement to call functions
    if(userInput == 1){

    }else if(userInput == 2){

    }else if(userInput == 3){
        prompt(contacts());
    }else(prompt("Error"));
}

function contacts(list,name,email,phoneNumber){

    list = [];
    name = [];
    email = [];
    phoneNumber = [];
    list[0] = "Jonathan Ortiz";
    list[1] = "Corey Davenport";
    list[2] = "Donald  Page";

   for(i = 0; i < list.length;i++){
       console.log(list[i] + "\n");
   }

}
function AddContact(name,email,phoneNumber){

    
}
function Sent(){

}function quit(){

    MathbotMessenger = false;
    return MathbotMessenger;
}

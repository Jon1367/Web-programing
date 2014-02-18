/**
 * Created by Jonathan Ortiz on 1/31/14.
 */

    // Loop condition
var MathbotMessenger = true;

var contactlist = [];
    contactlist[0] = 'Jonathan';

var email = [];
    email[0] = 'Jonathano1367@yahoo.com';

var phoneNumber= [];
    phoneNumber[0] = ("310 - 717 - 3095")


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
        info();
    }else if(userInput == 2){
        AddContact();
    }else if(userInput == 3){
        contacts();
    }else(prompt("Error"));
}

function contacts(){


   for(i = 0; i < contactlist.length;i++){
        clear();
       console.log(contactlist[i] + "\n" + phoneNumber[i] + "\n" + email[i]);
   }

}
function AddContact(){

    contactlist[contactlist.length] = prompt("What is his name:");

    email[email.length] = prompt("what is their email adress:");

    phoneNumber[phoneNumber.length] = prompt("What is their phone number:");


        //return contactlist, email, phoneNumber;
}

function quit(){

    MathbotMessenger = false;
    return MathbotMessenger;
}

function info(){
    var message = prompt("Who would you like to message;");

    contactlist[message] = prompt(" What would you like to say:")
}

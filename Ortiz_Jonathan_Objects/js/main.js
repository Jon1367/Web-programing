/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

//var name = ["jon","pat","cory","Don","scott"];

var people = [];

function Person(){

   this.name = "";
   this.job = "";
   this.action = "";

}

Person.name = ["Jon","Pat","Cory","Don","Scott"];

function generateHTML(){

    for(var i = 0; i < Person.name.length;i++){
        var person = new Person();
        people.push(person);
    }
}



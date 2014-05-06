/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){


var names = ["jon","pat","cory","Don","scott"];

var p = [~~(Math.random() * names.length)];

    names.splice(names.indexOf(p),1);
var people = [];

var int = setInterval(update,3000);

var name = document.querySelector("#r1c1");
var job = document.querySelector("#r1c2");
var action = document.querySelector("#r1c3");

var name2 = document.querySelector("#r2c1");
var job2 = document.querySelector("#r2c2");
var action2 = document.querySelector("#r2c3");

var name3 = document.querySelector("#r3c1");
var job3 = document.querySelector("#r3c2");
var action3 = document.querySelector("#r3c3");



function update(){

    action.innerHTML = people[0].actions();
    action2.innerHTML = people[1].actions();
    action3.innerHTML = people[2].actions();


}

function populateHTML (){

    for(var i = 0; i < 3;i++){
        var person = new Person();
        people.push(person);
    }

    name.innerHTML = people[0].name;
    name2.innerHTML = people[1].name;
    name3.innerHTML = people[2].name;

    job.innerHTML = people[0].job;
    job2.innerHTML = people[1].job;
    job3.innerHTML = people[2].job;


}

    populateHTML();
    update();
})();


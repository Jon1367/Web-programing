/*
File name: Lecture Day 7
Created by Jonathan Ortiz
Date: 2/22/2014

*/
(function(){
//Created an object dog
var dog = {name:"Champ" };
// use syntax to add onto the object
dog.color = 'black';
dog.bread = "Labador ";
dog.bark = function(){

    console.log("Woof");
};
// add a eat function to the dog object
dog.eat = function(){

   console.log("chow time");
};

function show (){

    console.log("name: " + dog.name);
    console.log("color: " +dog.color);
    console.log("bread: " + dog.bread);
    dog.bark();
    dog.eat();
}

show();

function Cat(){
     console.log("Cat created");
}


var scottsCat = new Cat();
console.log(scottsCat);

    var neighborhood = [];

    function House(c,a){
        this.name = ["Patrick: ","Jon:","Scott:"];
        this.color = c;
        this.age = a;
    }

    var jonHouse = new House('white',12);
    neighborhood.push(jonHouse);
    var patrickHouse = new House("Black",24);
    neighborhood.push(patrickHouse);
    var scottsHouse = new House("Gray",100);
    neighborhood.push(scottsHouse);

    neighborhood.forEach(function(element){

        for(var i = 0; i < neighborhood.length;i++){
        console.log(element.name[i]);
        console.log(element.color);
        console.log(element.age);
        }

    });

    scottsHouse.color =  'Blue';

    console.log("Patrick : " + patrickHouse.color, patrickHouse.age);
    console.log("Jon House: " +jonHouse.color, jonHouse.age);
    console.log("ScottsHouse: " + scottsHouse.color,scottsHouse.age);

    var colors = ['red','blue','purple','orange','brown','yellow','sky blue','pink','gold'];

//for(var i = 0; i < 1000;i++){
//        var color = colors[~~Math.random() * colors.length];
//        var house = new House(color,~~Math.random() * 100 + 1);
//        neighborhood.push(house);
//}
//
//    console.log(house);
//    var counter = 0;
function listHouse (){

   for(var i = 0; i < neighborhood.length;i++){

    console.log(neighborhood[i].color.neigborhood[i]);

   }
}

})();

//var dog = new object();

//new = instantiate - create an instance


(function(){
    function Car(){
        this.color ='';
        this.door = '';
        this.price = 0;
    }
    var myCar = new Car();
    myCar.price = 20000;

    var pCar = new Car();
    pCar.price = 1000000;

    var cars = [new Car(),new Car()]

})();

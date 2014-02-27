/*
File name: Lecture Day 7
Created by Jonathan Ortiz
Date: 2/22/2014

*/
(function(){

var dog = {name:"Champ" };

dog.color = 'black';
dog.bark = function(){
console.log("Woof");
};
dog.eat = function(){
    console.log("chow time");
};

function Cat(){
     console.log("Cat created");
}
var scottsCat = new Cat();

    var neighborhood = [];
    function House(c,a){
        this.color = 'Red';
        this.age = '8';
    }

    var jonHouse = new House('white',12);
    var patrickHouse = new House();
    var scottsHouse = new House();
    scottsHouse.color =  'Blue';
    console.log(patrickHouse.color);
    console.log(patrickHouse.color);

    var colors = ['red','blue','purple','orange','brown','yellow','sky blue','pink','gold'];
    for(var i = 0; i < 1000;i++){
        var color = colors[~~Math.random() * colors.length];
        var house = new House(color,~~Math.random() * 100 + 1);
        neighborhood.push(house);
    }

    console.log(house);
    var counter = 0;
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

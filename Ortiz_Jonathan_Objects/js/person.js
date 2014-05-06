/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
Person.names = ["Jon","Pat","Cory","Don","Scott"];
Person.jobs= ["Inn-out","Web Dev","Game Dev","buger King","PIMP"];
function Person(){

    this.name = Person.names[~~(Math.random() * Person.names.length)];
    this.job = Person.jobs[~~(Math.random() * Person.names.length)];
    this.action = ["World of WarCraft","Killing","Watch Tv","Working"];


}

Person.prototype.actions = function (){

    return this.action[~~(Math.random() * this.action.length)];
}

    window.Person = Person;
})();


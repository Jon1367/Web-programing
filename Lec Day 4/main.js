// both are called Data structures

// object & arr
// arr good for number or raw data
// object is more like data base


var car = ["Lexus","Toyota","RX-330"];

var carAgain = {name:"Lexus", make:"Toyota",model:"rx-339"};

var make = car[1];

console.log(make);

var objMake = carAgain.make;

console.log(objMake);

var student = {name:"Jonathan",ID:"2108205",grades:[80,90,100],adress:{street:"ocean",city:"Winterpark",state: "FL"}};
var student2 = {name:"Jonathan",ID:"2108205",age:[10,20,30],adress:{street:"ocean",city:"Syracuse",state: "FL"}};

var students = [student,student2];

var city = student.adress.city;

for(var property in student){
    console.log(property );
}


function getAverage(arr){

    var total = 0;

    for( var i = 0; i < arr.length;i++){
        total += arr[i];
    }
    return total/arr.length;

}
function Arrstudents(arr){

    var avg = [];
    var num = 0;
    for( var i = 0; i < arr.length;i++){
        num = getAverage(arr[i].grades);
        avg.push(num);
    }

    return avg;
}

console.log(Arrstudents(students));

function logData(arr){

    for( var i = 0; i < arr.length;i++){

        console.log(arr[i]);
    }
}
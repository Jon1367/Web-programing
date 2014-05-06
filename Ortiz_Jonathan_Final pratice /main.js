
(function(){

 // Create the canvas
var canvas = document.createElement("canvas");

// tells tag where to place it on the dom
    document.body.appendChild(canvas);


var ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;


// Draw line
ctx.beginPath() // starts drawling path or resets the current pth
ctx.stokeStyle = "f000"; // set stroke color



})();
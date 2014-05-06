(function(){


    // Creates an Element
    var canvas = document.createElement("canvas");
   // tell tag where to place it, example body in index add canvas to the dom
    document.body.appendChild(canvas);
    //gain acess to the canvas API
    var ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 400;

    //Draw line
    ctx.beginPath(); // starts drawling path or resets the current path
    ctx.strokeStyle = "#f000"; // set stroke color
    ctx.lineWidth = 2; // set stroke size
    ctx.moveTo(200,0);// define the starting point of the line
    ctx.lineTo(200,400); //define the ending point of the line
    ctx.stroke(); // render(draws) the line on the canvas

    //draw a rectangle with fill and stroke
    ctx.beginPath();
    ctx.fillStyle = "ff0000";// defines a fill color
    ctx.rect(175,175,50,50)// defines the rectangle at x = 175 with a width and height
    ctx.fill(); // renders the fill
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Draw circle with stroke
    ctx.beginPath();
    ctx.fillStyle = "rgb[0,0,255,255]";
    ctx.lineWidth = 8;
    ctx.arc(300,100,40,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    // draw triangle
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "orange";


    // Example
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255,0,0)";
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(400,400);
    ctx.moveTo(400,0);
    ctx.lineTo(0,400);
    ctx.stroke();

    // second square
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,255)";
    ctx.arc(200,200,30,0,Math.PI*2);
    ctx.rect(170,170,60,60);
    ctx.fill();


    //crapArt();
    function crapArt(){

    for(var i = 0; i < 1000;i++){

        ctx.beginPath();
       // ctx.strokeStyle = "rgb(255,0,0)";
       //ctx.strokeStyle = "rgb(" + ~~(Math.random() * 255 , + ","  + ")";
        ctx.lineWidth = 5;
        ctx.moveTo(Math.random() * 400,Math.random() * 400);
        ctx.lineTo(Math.random() * 400,Math.random() * 400);
        ctx.stroke();

    }

    }
    craptCircle();

    function craptCircle(){
        for( var i = 0; i < 1000;i++){

            ctx.beginPath();
            //ctx.fillStyle = "rgb(" + Math.floor(Math.random() + 255 + "," + Math.floor(Math.random() + 255))
            ctx.lineWidth = Math.random() * 10;
            ctx.arc(Math.random() * 400,Math.random() * 400,Math.random() * 40,0,Math.PI*2);
            ctx.stroke()
        }


    }

})();
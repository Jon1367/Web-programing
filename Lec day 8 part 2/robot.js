(function(){


    var interal = setInterval(update,100);

    var robot = new Robot("justin");
    robot.hand = "left";

    function update(){
        robot.attack();
    }

})();
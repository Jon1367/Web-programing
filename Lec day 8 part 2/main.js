


(function (){
    weaponList = [sword,Gun];

    function Robot(name){
        this.name = name;
        this.hand = "right";
        this.weapon = Robot.weapon[~~Math.random() * Robot.weaponList.length]

    }

})();
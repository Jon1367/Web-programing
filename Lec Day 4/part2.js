(function(){

    var couch = {color: "",
        type:"",
        price: 0,
        recline:function(){
            console.log(" i am reclining");
        }};

    couch.clor = "black";

    couch.type = "3 seater";

    couch.price = 100;



    for(var p in couch){
        console.log(p + ":"+ couch[p]);
    }


})();

(function(){
    var dog = {

    beard:"",
    name:"Max",
    bark:function(){
        console.log("woof!!!!!");
    }


    }


})();
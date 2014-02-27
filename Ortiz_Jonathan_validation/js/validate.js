/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){



//        var username = document.querySelector("#f_username");
//
//        var email = document.querySelector("#f_email");
//
//        var phoneNum = document.querySelector("#f_phone");
//
//        var snn = document.querySelector("#f_snn");
//
//        var password = document.querySelector("#f_password");

        document.querySelector("#f_submit").addEventListener("click",onClick);


        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(id);  //id = is the form input field ID
        function onClick(e){
            var validateField = function(inputName){

            }
        }

        e.preventDefault();
        return false;
    };

//
//    var validateField = function(inputName){
//
//
//        var value = inputName.value;
//        var pass = pattern.test(value);



        if (inputName.name === username ){
            var pattern = / ^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
  //  };

})();  // end wrapper




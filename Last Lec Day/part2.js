// review


(function (){

    // construstor capital letter
    function Student(){
        this.name = "";
        this.degree = "";
        this.id = "";
        this.grade = [80,90,100];
    }

    Student.prototype.average = function (){
        var total = 0;
        // acess grades then use a for each to illerate threw the array
       this.grade.forEach(function(e){
           // add all elements in the array
           total += e;
       });
        return total/this.grade.length;

    };

   // var stud = new Student();

    window.Student = Student;


})();
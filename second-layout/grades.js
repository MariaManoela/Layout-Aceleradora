function complete_table(e){

    e.preventDefault();

   
   var nome = document.getElementById("name_2").value;

   var name_table = document.getElementById("name_table");
   name_table.innerHTML=nome; 

   calculate();
   percent();

   console.log(name_table);

   return false;
}


function calculate(){
   var grade_1 = document.getElementById("grade_1").value;
   grade_1 = Number(grade_1);

   var grade_2 = document.getElementById("grade_2").value;
   grade_2 = Number(grade_2);

   var grade_table1 = document.getElementById("grade_table1");
   var grade_table2 = document.getElementById("grade_table2");

   grade_table1.innerHTML=grade_1;
   grade_table2.innerHTML=grade_2;

   var gradeFinal = 0.0;
   gradeFinal = (grade_1 + grade_2)/2;

   var gradeFinal_table = document.getElementById("grade_final");

   gradeFinal_table.innerHTML=gradeFinal;

}

function percent(){


   var attendance = document.getElementById("attendance").value;

   var attendance_table = document.getElementById("attendance_table");

   var attendance_aux = attendance + "%";

   attendance_table.innerHTML= attendance_aux;

}


function isPass(gradeFinal){

        var pass = true;
   
        if(gradeFinal >= 7.0){
            pass = true;
   
   
        }else{
            pass = false;
   
       }
}
<<<<<<< HEAD

function myFunction(cb, dv) {
    var checkBox = document.getElementById(cb);
    var dv = document.getElementById(dv);
    console.log(cb, dv.id); //check_parameter
    if (checkBox.checked == true) {
        dv.style.display = "block";
    } else {
        dv.style.display = "none";
    }
}
=======
function Mycheckbox(checkbox,dv) {
            var checkbox = document.getElementById(checkbox); 
            var dv = document.getElementById(dv);     
            if (checkbox.checked == true){
                dv.style.display = "block";
            } else {
                dv.style.display = "none";
            }
        }
>>>>>>> 57dbdc6a4b9fb33e6dd144d425f717c8efe97862

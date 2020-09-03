
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

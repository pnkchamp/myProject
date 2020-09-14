
function showCommerce(checkbox,dv) {
    var checkBox = document.getElementById(checkbox);
    var dv = document.getElementById(dv);
    if (checkBox.checked == true) {
        dv.classList.add("show");
        dv.classList.remove("hide");

    } else {
        dv.classList.add("hide");
        dv.classList.remove("show");    

    }
}

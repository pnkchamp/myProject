
function showCommerce(checkbox, dv) {
    var checkBox = document.getElementById(checkbox);
    var dv = document.getElementById(dv);
    if (checkBox.checked == true) {
        dv.classList.remove("commerce");
        dv.classList.add("show");
    } else {
        dv.classList.remove("show");
        dv.classList.add("commerce");
    }
}

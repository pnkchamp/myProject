function showCommerce(checkbox,dv,error) {
    var checkBox = document.getElementById(checkbox);
    var dv = document.getElementById(dv);
    var er = document.getElementById(error);
    if (checkBox.checked == true) {
        dv.classList.add("active");
        er.classList.add("hide");
    } else {
        dv.classList.remove("active");  
        er.classList.add("hide");
    }
}


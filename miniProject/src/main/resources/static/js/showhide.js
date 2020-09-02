function Mycheckbox(checkbox,dv) {
            var checkbox = document.getElementById(checkbox); 
            var dv = document.getElementById(dv);     
            if (checkbox.checked == true){
                dv.style.display = "block";
            } else {
                dv.style.display = "none";
            }
        }

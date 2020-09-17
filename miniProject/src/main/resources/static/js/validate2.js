function validateForm(){
    var comerceck = document.getElementById('commerce_box');
    var platformck = document.getElementById('platform_box');
    var deliveryck = document.getElementById('delivery_box');
    var socialck = document.getElementById('social_box');
    var otherck = document.getElementById('other_box1');
    var bankingck = document.getElementById('banking_box');
    var walletck = document.getElementById('wallet_box');
    var otherck2 = document.getElementById('other_box2');

    if(comerceck.checked == true || platformck.checked == true || deliveryck.checked == true || 
        socialck.checked == true || otherck.checked == true || bankingck.checked == true || 
        walletck.checked == true || otherck2.checked == true){
            alert('ทดสอบ')
            var lazada = document.getElementById('lazada');
        var shopee = document.getElementById('shopee');
        var jd = document.getElementById('jd');
        var inwshop =  document.getElementById('inwshop');
        var other = document.getElementById('other');
        var commerce_error = document.getElementById('commerce_error');

        if (lazada.value == '' && shopee.value == '' && jd.value =='' && inwshop.value =='' && other.value ==''){ 
            commerce_error.classList.add('showerror')
            commerce_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
              );
              return false
        }else{
            commerce_error.classList.remove('showerror')
            commerce_error.classList.add('hide')
        }
        }


}
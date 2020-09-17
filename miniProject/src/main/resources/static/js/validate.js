
function validateForm(){
    var comerceck = document.getElementById('commerce_box');
    var platformck = document.getElementById('platform_box');
    var deliveryck = document.getElementById('delivery_box');
    var socialck = document.getElementById('social_box');
    var otherck = document.getElementById('other_box1');
    var bankingck = document.getElementById('banking_box');
    var walletck = document.getElementById('wallet_box');
    var otherck2 = document.getElementById('other_box2');
    var iserror = true;

    if(comerceck.checked == true){
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
              iserror = false
        }else{
            commerce_error.classList.remove('showerror')
            commerce_error.classList.add('hide')
        }
    }
    if(platformck.checked == true){

        var agoda = document.getElementById('agoda');
        var booking = document.getElementById('booking');
        var expedia = document.getElementById('expedia');
        var airbnb = document.getElementById('airbnb');
        var traveloka = document.getElementById('traveloka');
        var other1 = document.getElementById('other1');
        var platform_error = document.getElementById('platform_error');

        if (agoda.value == '' && booking.value =='' && expedia.value =='' && airbnb.value =='' && traveloka.value =='' && other1.value ==''){
            platform_error.classList.add('showerror')
            platform_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false
            
        }else{
            platform_error.classList.remove('showerror')
            platform_error.classList.add('hide')
        }
    }
    if(deliveryck.checked == true){

        var grabfood = document.getElementById('grabfood');
        var lineman = document.getElementById('lineman');
        var foodpanda = document.getElementById('foodpanda');
        var get = document.getElementById('get');
        var other2 = document.getElementById('other2');
        var delivery_error = document.getElementById('delivery_error');

        if (grabfood.value == '' && lineman.value =='' && foodpanda.value =='' && get.value =='' && other2.value ==''){
            delivery_error.classList.add('showerror')
            delivery_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false
            

        }else{
            delivery_error.classList.remove('showerror')
            delivery_error.classList.add('hide')
        }
    }
    if(socialck.checked == true){

        var facebook = document.getElementById('facebook');
        var instagram = document.getElementById('instagram');
        var line = document.getElementById('line');
        var youtube = document.getElementById('youtube');
        var other3 = document.getElementById('other3'); 
        var social_error = document.getElementById('social_error');

        if (facebook.value == '' && instagram.value =='' && line.value =='' && youtube.value =='' && other3.value ==''){
            social_error.classList.add('showerror')
            social_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false
            
        }else{
            social_error.classList.remove('showerror')
            social_error.classList.add('hide')
        }
    }
    if(otherck.checked == true){
            
        var other4 = document.getElementById('other4') 
        var other_error = document.getElementById('other-1_error')
        if (other4.value == '' ){
            other_error.classList.add('showerror')
            other_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false

        }else{
            other_error.classList.remove('showerror')
            other_error.classList.add('hide')
        }
    }
    if(bankingck.checked == true){

        var bankname = document.getElementById('bankname');
        var banknum = document.getElementById('banknum');
        var bankpro = document.getElementById('bankpro');
        var bankname2 = document.getElementById('bankname2');
        var banknum2 = document.getElementById('banknum2');
        var bankpro2 = document.getElementById('bankpro2');  
        var banking_error = document.getElementById('banking_error');

        if (bankname.value == '' && banknum.value =='' && bankpro.value =='' || bankname2.value =='' && banknum2.value =='' && bankpro2.value ==''){
            banking_error.classList.add('showerror')
            banking_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false

        }else{
            banking_error.classList.remove('showerror')
            banking_error.classList.add('hide')
        }
    }
    if(walletck.checked == true){

        var rabbit = document.getElementById('rabbit');
        var truemony = document.getElementById('truemony');
        var paypal = document.getElementById('paypal');
        var airpay = document.getElementById('airpay');
        var other4 = document.getElementById('other4');
        var other3 = document.getElementById('other3');
        var wallet_error = document.getElementById('wallet_error');

        if (rabbit.value == '' && truemony.value =='' && paypal.value =='' && airpay.value =='' && other4.value ==''){
            wallet_error.classList.add('showerror')
            wallet_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false


        }else{
            wallet_error.classList.remove('showerror')
            wallet_error.classList.add('hide')
        }
    }
    if(otherck2.checked == true){

        var other5 = document.getElementById('other5');
        var otherbox2_error = document.getElementById('otherbox2_error');

        if (other5.value == ''){
            otherbox2_error.classList.add('showerror')
            otherbox2_error.classList.remove('hide')
            Swal.fire(
                'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                'กรุณากรอกข้อมูลมากกว่า 1 รายการ',
                'error'
            );
            iserror = false


        }else{
            otherbox2_error.classList.remove('showerror')
            otherbox2_error.classList.add('hide')
        }
    }
    
    return iserror;

}








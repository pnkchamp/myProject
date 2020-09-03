function validate() {
    //eCOMMERCE Alert
    if (document.getElementById('cb_ecom').checked == true) {
        if (document.getElementById("txt_lazada").value == "") {
            alert("กรุณาระบุ URL ของ Lazada");
            document.getElementById("txt_lazada").focus();
        } else if (document.getElementById("txt_shopee").value == "") {
            alert("กรุณาระบุ URL ของ Shopee");
            document.getElementById("txt_shopee").focus();
        }
        else if (document.getElementById("txt_jd").value == "") {
            alert("กรุณาระบุ URL ของ JD Central");
            document.getElementById("txt_jd").focus();
        }
        else if (document.getElementById("txt_lnw").value == "") {
            alert("กรุณาระบุ URL ของ lnwShop");
            document.getElementById("txt_lnw").focus();
        }
        else if (document.getElementById("txt_other_ecom").value == "") {
            alert("กรุณาระบุ URL อื่น ๆ ของ e-Commerce Platform");
            document.getElementById("txt_other_ecom").focus();
        }
    }
    //platform Alert
    if (document.getElementById('cb_pf').checked == true) {
        if (document.getElementById("txt_agoda").value == "") {
            alert("กรุณาระบุ URL ของ Agoda");
            document.getElementById("txt_agoda").focus();
        }
        else if (document.getElementById("txt_booking").value == "") {
            alert("กรุณาระบุ URL ของ Booking.com");
            document.getElementById("txt_booking").focus();
        }
        else if (document.getElementById("txt_expedia").value == "") {
            alert("กรุณาระบุ URL ของ Expedia");
            document.getElementById("txt_expedia").focus();
        }
        else if (document.getElementById("txt_airbnb").value == "") {
            alert("กรุณาระบุ URL ของอื่น AirBnb");
            document.getElementById("txt_airbnb").focus();
        }
        else if (document.getElementById("txt_traveloka").value == "") {
            alert("กรุณาระบุ URL ของ Traveloka");
            document.getElementById("txt_traveloka").focus();
        }
        else if (document.getElementById("txt_other_platfom").value == "") {
            alert("กรุณาระบุ URL อื่น ๆ  ของ Platform จองโรมแรม");
            document.getElementById("txt_other_platfom").focus();
        }
    }
    //Delivery Alert
    if (document.getElementById('cb_deli').checked == true) {
        if (document.getElementById("txt_grabfood").value == "") {
            alert("กรุณาระบุ URL ของ Grabfood");
            document.getElementById("txt_grabfood").focus();
        }
        else if (document.getElementById("txt_lineman").value == "") {
            alert("กรุณาระบุ URL ของ Lineman");
            document.getElementById("txt_lineman").focus();
        }
        else if (document.getElementById("txt_foodpanda").value == "") {
            alert("กรุณาระบุ URL ของอื่น Foodpanda");
            document.getElementById("txt_foodpanda").focus();
        }
        else if (document.getElementById("txt_get").value == "") {
            alert("กรุณาระบุ URL ของ Get");
            document.getElementById("txt_get").focus();
        }
        else if (document.getElementById("txt_other_delivery").value == "") {
            alert("กรุณาระบุ URL อื่น ๆ  ของ Delivery");
            document.getElementById("txt_other_delivery").focus();
        }
    }
    //Social Media Alert
    if (document.getElementById('cb_social').checked == true) {
        if (document.getElementById("txt_fb").value == "") {
            alert("กรุณาระบุ URL ของ Facebook");
            document.getElementById("txt_fb").focus();
        }
        else if (document.getElementById("txt_ig").value == "") {
            alert("กรุณาระบุ URL ของ Instagram");
            document.getElementById("txt_ig").focus();
        }
        else if (document.getElementById("txt_line").value == "") {
            alert("กรุณาระบุ URL ของ Line หรือ Line ID");
            document.getElementById("txt_line").focus();
        }
        else if (document.getElementById("txt_youtube").value == "") {
            alert("กรุณาระบุ URL ของ Youtube");
            document.getElementById("txt_youtube").focus();
        }
        else if (document.getElementById("txt_other_social").value == "") {
            alert("กรุณาระบุ URL อื่น ๆ  ของ Social Media");
            document.getElementById("txt_other_social").focus();
        }
    }
    //Website_me
    if (document.getElementById('cb_other').checked == true) {
        if (document.getElementById("txt_other_me").value == "") {
            alert("กรุณาระบุ URL เว็บไซต์ของตนเอง");
            document.getElementById("txt_other_me").focus();
        }
    }

    //Payment Alert
    if (document.getElementById('cb_onlinebanking').checked == true) {
        if (document.getElementById("txt_name_banking").value == "") {
            alert("กรุณาระบุชื่อบัญชีธนาคาร");
            document.getElementById("txt_name_banking").focus();
        }
        else if (document.getElementById("txt_number_banking").value == "") {
            alert("กรุณาระบุเลขบัญชีธนาคาร");
            document.getElementById("txt_number_banking").focus();
        }
        else if (document.getElementById("txt_bank").value == "") {
            alert("กรุณาระบุธนาคาร");
            document.getElementById("txt_bank").focus();
        }
    }

    //e-Wallet
    if (document.getElementById('cb_eWallet').checked == true) {
        if (document.getElementById("txt_rabbit").value == "") {
            alert("กรุณาระบุข้อมูลของ Rabbit Line Pay");
            document.getElementById("txt_rabbit").focus();
        }
        else if (document.getElementById("txt_truemoney").value == "") {
            alert("กรุณาระบุข้อมูลของ True Money Wallet");
            document.getElementById("txt_truemoney").focus();
        }
        else if(document.getElementById("txt_paypal_2").value == ""){
            alert("กรุณาระบุข้อมูลของ Paypal");
            document.getElementById('txt_paypal_2').focus();
        }
        else if(document.getElementById("txt_airpay").value == ""){
            alert("กรุณาระบุข้อมูลของ AirPay Wallet");
            document.getElementById('txt_airpay').focus();
        }
        else if(document.getElementById('txt_other_ewallet').value == ""){
            alert("กรุณาระบุข้อมูลอื่น ๆ ของบริการ e-Wallet");
            document.getElementById('txt_other_ewallet').focus();
        }
    }

    //other Payment
    if(document.getElementById('cb_other_pay').checked == true){
        if (document.getElementById("txt_other_pay").value == "") {
            alert("กรุณาระบุข้อมูลอื่น ๆ สำหรับการรับชำระเงิน");
            document.getElementById('txt_other_pay').focus();
        }
    }

}


function checkRong(value, idError, name){
    var valid = true;
    if(value == ""){
        document.getElementById(idError).innerHTML = name + " không được để trống";
        valid = false;
    }else{
        document.getElementById(idError).innerHTML = "";
    }
    return valid;
}

function checkRongGender(value, idError, name){
    var valid = false;
    var ismale = document.getElementById("male").checked;
    var isfemale = document.getElementById("female").checked;
    if (ismale || isfemale){
        document.getElementById(idError).innerHTML = "";
        valid = true;
    }
    
    else{
        document.getElementById(idError).innerHTML = name + " không được để trống";
        valid = false;
    }
    
    return valid;
}

function checklengthPhone(value, idError, name, minlength, maxlength){
    var valid = true;
    if(value.length < 4 || value.length > 6){
        document.getElementById(idError).innerHTML = name + " tối đa " +  minlength + " đến " + maxlength + " số";
        valid = false;
    }else{
        document.getElementById(idError).innerHTML = "";
    }
    return valid;
}
function checkSo(value, idError, name){
    var regex = /^[0-9]+$/;
    if(regex.test(value)){
        document.getElementById(idError).innerHTML = "";
        return true;
    }
    document.getElementById(idError).innerHTML = name + " phải là số";
    return false;
}

function checkChu(value, idError, name){
    var regex = /^[A-Za-z_ ]+$/;
    if(regex.test(value)){
        document.getElementById(idError).innerHTML = "";
        return true;
    }
    document.getElementById(idError).innerHTML = name + " phải là chữ";
    return false;
}

function checkEmail(value, idError, name){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(value)){
        document.getElementById(idError).innerHTML = "";
        return true;
    }
    document.getElementById(idError).innerHTML = name + " không hợp lệ";
    return false;
}

function checkPassword(value, idError, name, minlength, maxlength){
    var regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,10}$/;
    if(regex.test(value)){
        document.getElementById(idError).innerHTML = "";
        return true;
    }
    document.getElementById(idError).innerHTML = name + " tối đa " + minlength + " đến " + maxlength + " ký tự và có chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ";
    return false;
}

function checkSamePassword(value, idError, name) {
    var confirmPassword = document.getElementById("txtPasswordConfirm").value;
    if (value != confirmPassword) {
        document.getElementById(idError).innerHTML = name + " không trùng khớp ";
        return false;
    }
    return true;
}


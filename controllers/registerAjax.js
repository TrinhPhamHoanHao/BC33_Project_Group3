

document.querySelector("#submit").onclick =function (){
    var user = new User();
    user.email = document.querySelector("#txtEmail").value;
    user.password = document.querySelector("#txtPassword").value;
    user.name = document.querySelector("#txtName").value;
    user.gender = document.querySelector("#checkGender").value;
    user.phone = document.querySelector("#txtPhone").value;
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user 
    });

    promise.then(function(result){
        console.log(result.data);
        alert("Đăng ký tài khoản thành công");
    });
    promise.catch(function(err){
        console.log(err);
        alert("Đăng ký tài khoản thất bại");
    });

    var valid = true;
    document.getElementById("spEmail").style.display='block';
    document.getElementById("spPassword").style.display='block';
    document.getElementById("spPasswordConfirm").style.display='block';
    document.getElementById("spName").style.display='block';
    document.getElementById("spPhone").style.display='block';
    document.getElementById("spGender").style.display='block';

    //kiểm tra rỗng
    valid = checkRong(user.email,"spEmail", "Email") & checkRong(user.password,"spPassword","Password") & checkRong(user.passwordConfirm,"spPasswordConfirm","Password Confirm") & checkRong(user.name,"spName","Tên người dùng") & checkRong(user.phone,"spPhone","Số điện thoại");
    // valid &= checkRongGender(user.male,"spGender","Gender") & checkRongGender(user.female,"spGender","Gender");
    //check độ dài tài khoản
    valid &= checklengthPhone(user.phone,"txtPhone", "Số điện thoại",10,11);
    //check ký tự số
    valid &= checkSo(user.phone,"spPhone", "Số điện thoại");
    //check ký tự chữ
    valid &= checkChu(user.name,"spName", "Tên người dùng");
    //check email 
    valid &= checkEmail(user.email,"spEmail","Email");
    //check password
    valid &= checkPassword(user.password,"spPassword","Mật khẩu",6,10); 
    valid &= checkSamePassword(user.password, "spPassword", "Mật khẩu và mật khẩu xác nhận");

    if(!valid){
        return;
    }
}



document.querySelector("#submit").onclick =function (){
    var user = new User();
    user.email = document.querySelector("#txtEmail").value;
    user.password = document.querySelector("#txtPassword").value;
    user.name = document.querySelector("#txtName").value;
    user.gender = document.querySelector("#checkGender").checked;
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
}

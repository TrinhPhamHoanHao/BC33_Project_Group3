


var userList = [];
function createUser(){
    var userEmail = document.getElementById("txtEmail").value;
    var userPassword = document.getElementById("txtPassword").value;
    var userPasswordConfirm = document.getElementById("txtPasswordConfirm").value;
    var userName = document.getElementById("txtName").value;
    var userPhone = document.getElementById("txtPhone").value;
    var userMale = document.getElementById("male").value;
    var userFemale = document.getElementById("female").value;
    var userGender = document.getElementById("txtGender").value;
    
    var user = new User(
        userEmail,
        userPassword,
        userPasswordConfirm,
        userName,
        userPhone,
        userMale,
        userFemale,
        userGender,
    );

    var valid = true;
    document.getElementById("spEmail").style.display='block';
    document.getElementById("spPassword").style.display='block';
    document.getElementById("spPasswordConfirm").style.display='block';
    document.getElementById("spName").style.display='block';
    document.getElementById("spPhone").style.display='block';
    document.getElementById("spGender").style.display='block';

    //kiểm tra rỗng
    valid = checkRong(user.email,"spEmail", "Email") & checkRong(user.password,"spPassword","Password") & checkRong(user.passwordConfirm,"spPasswordConfirm","Password Confirm") & checkRong(user.male,"spName","Tên người dùng") & checkRong(user.phone,"spPhone","Số điện thoại");
    valid &= checkRongGender(user.gender,"spGender","Gender");
    //check độ dài tài khoản
    valid &= checklengthPhone(user.phone,"txtPhone", "Số điện thoại",10,11);
    //check ký tự số
    valid &= checkSo(user.phone,"spPhone", "Số điện thoại");
    //check ký tự chữ
    valid &= checkChu(user.name,"spName", "Tên người dùng");
    //check email 
    valid &= checkEmail(user.email,"spEmail","Email");
    //check password
    valid &= checkPassword(user.password,"spPassword","Mật khẩu",6,10) & checkPassword(user.passwordConfirm,"spPasswordConfirm","Mật khẩu xác nhận",6,10);
    valid &= checkSamePassword(user.password, "spPassword", "Mật khẩu và mật khẩu xác nhận");
    if(!valid){
        return;
    }
    userList.push(user);
    // renderUserList(userList, "arrUser");
}

// function renderUserList(arrUser){
//     var output = "";
//     for (var index = 0; index < arrUser.length; index++){
//         var obUser = arrUser[index];
//         var trUser = `
//             <tr>
//                 <td>${obUser.email}</td>
//                 <td>${obUser.password}</td>
//                 <td>${obUser.passwordConfirm}</td>
//                 <td>${obUser.name}</td>
//                 <td>${obUser.phone}</td>
//                 <td>${obUser.gender}</td>
//             </tr>
//         `;
//         output += trUser;
//     }
//     document.querySelector("tbody").innerHTML = output;
//     return output;
// }

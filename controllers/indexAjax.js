function getDataProductApi(){
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
    });

    promise.then(function(result){
        renderProductList(result.data.content);
    });
    promise.catch(function(err){
        console.log(err);
    });
}
window.onload = function(){
    getDataProductApi();
}


function postDataUserApi(){
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
    });

    promise.then(function(result){
        renderUserList(result.data.content);
    });
    promise.catch(function(err){
        console.log(err);
    });
}
window.onload = function(){
    postDataUserApi();
}

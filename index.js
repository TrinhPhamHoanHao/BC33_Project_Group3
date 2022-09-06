

function renderProductList(arrProduct){
    var output = "";
    for (var index = 0; index < arrProduct.length; index++){
        var obProduct = arrProduct[index];
        var html = `
            <div class="col">
                        <img src="${obProduct.image}"</img>
                        <h2>${obProduct.name}</h2>
                        <p>${obProduct.shortDescription}</p>
                        <div class="btn">
                            <button class="buy_now">Buy now</button>
                            <button class="price">${obProduct.price}</button>
                        </div>
            </div>
        `;
        output += html;
    }
    document.querySelector("#txtProduct").innerHTML = output;
    return output;
}

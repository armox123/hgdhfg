"use strict";
let targetProduct;
const fullProduct = document.querySelector("#full-product");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

for (const product of products) {
    if(product.id == id){
        targetProduct = product;
        break;
    }
}

fullProduct.innerHTML = `<h1>${targetProduct.name}</h1>
<img src='${targetProduct.image}' alt='Картинка не загрузилась :<'>;
<p>${targetProduct["full-discription"]}<p>`

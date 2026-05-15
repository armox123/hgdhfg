"use strict"

let products = [
    {
        "id":1,
        "name": "potato",
        "discription": "Описание товара potato",
        "full-discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "price": 123,
    },
    {
        "id":2,
        "name": "carrot",
        "discription": "Описание товара carrot",
        "full-discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "price": 250,
    },
    {
        "id":3,
        "name": "apple",
        "discription": "Описание товара apple",
        "full-discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "price": 540,
    },
    {
        "id":4,
        "name": "chicken",
        "discription": "Описание товара chicken",
        "full-discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "price": 350,
    },
]
const fullProduct = document.querySelector("#full-product") 
const content = document.querySelector("#content");
for (const product of products) {
    content.innerHTML += 
    `<div>
        <div><a href="product.html?id=${product.id}">${product.name}</a></div>
        <div>${product.discription}</div>
        <div>${product.price}</div>
        <button>Добавить в корзину</button>
    </div>`;
}
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
for (const trueproduct of products) {
    if(trueproduct.id == id){
        fullProduct.innerHTML += `${trueproduct.name}`;
    }
}


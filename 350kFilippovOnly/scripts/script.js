"use strict"

let products = [
    {
        "id":1,
        "name": "potato",
        "discription": "Описание товара potato",
        "fullDiscription": "Карто́фель, или паслён клубнено́сный (лат. Solánum tuberósum), — вид многолетних клубненосных травянистых растений из рода Паслён (Solanum) семейства Паслёновые (Solanaceae). Клубни картофеля являются важным пищевым продуктом. Плоды ядовиты в связи с содержанием в них соланина. С потребительской точки зрения картофель является овощем.",
        "image": "./images/potato.webp",
        "filtr": "vegetables",
        "price": 123,
    },
    {
        "id":2,
        "name": "carrot",
        "discription": "Описание товара carrot",
        "full-discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/carrot.jpg",
        "filtr": "vegetables",
        "price": 250,
    },
    {
        "id":3,
        "name": "apple",
        "discription": "Описание товара apple",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/apple.jpg",
        "filtr": "fruit",
        "price": 540,
    },
    {
        "id":4,
        "name": "chicken",
        "discription": "Описание товара chicken",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "filtr": "meat",
        "price": 350,
    },
    {
        "id":5,
        "name": "beef",
        "discription": "Описание товара beef",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "filtr": "meat",
        "price": 450,
    },
    {
        "id":6,
        "name": "codfish",
        "discription": "Описание товара codfish",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "filtr": "fish",
        "price": 600,
    },
] 
const content = document.querySelector("#content");
for (const product of products) {
    content.innerHTML += 
    `<div class="card">
        <div class="img-div"><img class="cardImg" src='${product.image}', width=150px/></div>
        <div><a href="product.html?id=${product.id}">${product.name}</a></div>
        <div>${product.discription}</div>
        <div>${product.price}</div>
        <button>Добавить в корзину</button>
    </div>`;
}
const filtr = document.querySelectorAll("input")
for (const elem of filtr) {
    elem.addEventListener('change', function(changed){
        if(changed.target.value === "all"){
            
        }
    })
}



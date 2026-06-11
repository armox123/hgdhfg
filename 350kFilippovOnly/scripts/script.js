"use strict"

let products = [
    {
        "id":1,
        "name": "Картофель",
        "discription": "Описание товара картофеля",
        "fullDiscription": "Карто́фель, или паслён клубнено́сный (лат. Solánum tuberósum), — вид многолетних клубненосных травянистых растений из рода Паслён (Solanum) семейства Паслёновые (Solanaceae). Клубни картофеля являются важным пищевым продуктом. Плоды ядовиты в связи с содержанием в них соланина. С потребительской точки зрения картофель является овощем.",
        "image": "./images/potato.webp",
        "filtr": "vegetables",
        "price": 123,
    },
    {
        "id":2,
        "name": "Морковь",
        "discription": "Описание товара моркови",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/carrot.jpg",
        "filtr": "vegetables",
        "price": 250,
    },
    {
        "id":3,
        "name": "Яблоко",
        "discription": "Описание товара яблоко",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/apple.jpg",
        "filtr": "fruit",
        "price": 540,
    },
    {
        "id":4,
        "name": "Курица",
        "discription": "Описание товара курица",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/chicken.jpg",
        "filtr": "meat",
        "price": 350,
    },
    {
        "id":5,
        "name": "Говядина",
        "discription": "Описание товара говядина",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/beef.jpeg",
        "filtr": "meat",
        "price": 450,
    },
    {
        "id":6,
        "name": "Треска",
        "discription": "Описание товара треска",
        "fullDiscription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis dolores libero atque placeat adipisci nesciunt necessitatibus, repellat dignissimos suscipit? Necessitatibus quisquam voluptatibus ad ducimus vitae quae, praesentium hic perspiciatis?",
        "image": "./images/cod.jpg",
        "filtr": "fish",
        "price": 600,
    },
] 
let lastFlt;
let query = "";
const content = document.querySelector("#content");
function generate(flt, srch){
    content.innerHTML = '';
    lastFlt = flt;
    for (const product of products) {
        if(flt === 'all' && product.name.toLowerCase().includes(srch)){
            content.innerHTML += 
            `<div class="card">
                <div class="img-div"><img class="cardImg" src='${product.image}', width=150px/></div>
                <div><a href="product.html?id=${product.id}">${product.name}</a></div>
                <div>${product.discription}</div>
                <div>${product.price}</div>
                <button>Добавить в корзину</button>
            </div>`;
        }
        else if(flt === product.filtr && product.name.toLowerCase().includes(srch)){
            content.innerHTML += 
            `<div class="card">
                <div class="img-div"><img class="cardImg" src='${product.image}', width=150px/></div>
                <div><a href="product.html?id=${product.id}">${product.name}</a></div>
                <div>${product.discription}</div>
                <div>${product.price}</div>
                <button>Добавить в корзину</button>
            </div>`;
        }
        
    }
}
const themeBtn = document.querySelector('#theme-btn');
themeBtn.addEventListener('click', function(){
    
})
//поиск
const searchText = document.querySelector('#card-search')
searchText.addEventListener('input', function(){
    query = searchText.value.toLowerCase();
    generate(lastFlt, query)
})
//фильтры
const filtr = document.querySelectorAll(".filtr");
for (const elem of filtr) {
    elem.addEventListener('change', function(changed){
        generate(changed.target.id, query);
    })
}
//сортировка
const sort = document.querySelectorAll(".sort");
for (const elem of sort){
    elem.addEventListener('change', function(changed){
            if(changed.target.id == "alphabet-inc"){
                products.sort((a, b) => a.name.localeCompare(b.name));
            }
            else if(changed.target.id == "alphabet-des"){
                products.sort((a, b) => b.name.localeCompare(a.name));
            }
            else if(changed.target.id == "price-inc"){
                products.sort((a, b) => a.price - b.price);
            }
            else if(changed.target.id == "price-des"){
                products.sort((a, b) => b.price - a.price);
            }
        generate(lastFlt, query);
    })
}
generate('all', "");//вызов функции что бы появились карточки

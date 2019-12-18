import {
    animalCardTemplater
} from './general-list/animalCardTemplater.js';

const window = document.querySelector('.animals-window');
const templ = new animalCardTemplater;

let testCat = {
    "id": 201,
    "species": "cat",
    "price": 2000,
    "gender": "female",
    "weight": 1.6,
    "birth_date": 1561669200000,
    "color": "gray",
    "breed": "Scottish Fold",
    "img": "https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id201.jpg",
    "is_sterile": false,
    "hair": "medium"
}
let testDog = {
    "id": 211,
    "species": "dog",
    "price": 5000,
    "gender": "male",
    "weight": 20,
    "birth_date": 1527282000000,
    "color": "white-gray-black",
    "breed": "Siberian Husky",
    "img": "https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id211.jpg",
    "is_sterile": false,
    "hair": "medium"
}
let testBird = {
    "id": 221,
    "species": "bird",
    "price": 550,
    "gender": "female",
    "weight": 0.5,
    "birth_date": 1542232800000,
    "color": "gray",
    "breed": "African Grey Parrot",
    "img": "https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id221.jpg",
    "type": "singing",
    "activity": "day"
}
let testFish = {
    "id": 231,
    "species": "fish",
    "price": 50,
    "gender": "male",
    "weight": 0.9,
    "birth_date": 1565989200000,
    "color": "white",
    "breed": "Bass",
    "img": "https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id231.jpg",
    "water_type": "limnetic",
    "temper": "peacefull"
}

window.innerHTML += templ.getCardTemplate(testCat);
window.innerHTML += templ.getCardTemplate(testDog);
window.innerHTML += templ.getCardTemplate(testBird);
window.innerHTML += templ.getCardTemplate(testFish);
window.innerHTML += templ.getCardTemplate(testCat);
window.innerHTML += templ.getCardTemplate(testDog);
window.innerHTML += templ.getCardTemplate(testBird);
window.innerHTML += templ.getCardTemplate(testFish);
window.innerHTML += templ.getCardTemplate(testCat);
window.innerHTML += templ.getCardTemplate(testDog);
window.innerHTML += templ.getCardTemplate(testBird);
window.innerHTML += templ.getCardTemplate(testFish);
window.innerHTML += templ.getCardTemplate(testCat);
window.innerHTML += templ.getCardTemplate(testDog);
window.innerHTML += templ.getCardTemplate(testBird);
window.innerHTML += templ.getCardTemplate(testFish);
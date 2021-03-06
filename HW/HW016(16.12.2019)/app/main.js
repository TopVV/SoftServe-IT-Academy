import {
    catTemplate
} from './catTemplate.js';
import {
    dogTemplate
} from './dogTemplate.js';
import {
    birdTemplate
} from './birdTemplate.js';
import {
    fishTemplate
} from './fishTemplate.js';

// https://www.purina.com/cats/cat-breeds

let testCat = new catTemplate({
    id: 201,
    species: 'cat',
    price: 2000,
    gender: 'female',
    weight: 1.6,
    birth_date: '06-28-2019',
    color: 'blue',
    breed: 'Scottish Fold',
    is_sterile: false,
    hair: 'medium',
    img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id201.jpg',
})
let testDog = new dogTemplate({
    id: 211,
    species: 'dog',
    price: 5000,
    gender: 'male',
    weight: 20,
    birth_date: '05-26-2018',
    color: 'white-gray-black',
    breed: 'Siberian Husky',
    is_sterile: false,
    hair: 'medium',
    img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id211.jpg',
})
let testBird = new birdTemplate({
    id: 221,
    species: 'bird',
    price: 550,
    gender: 'female',
    weight: 0.5,
    birth_date: '11-15-2018',
    color: 'gray',
    breed: 'African Grey Parrot',
    type: 'singing',
    activity: 'day',
    img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id221.jpg',
})
let testFish = new fishTemplate({
    id: 231,
    species: 'fish',
    price: 50,
    gender: 'male',
    weight: 0.9,
    birth_date: '08-17-2019',
    color: 'white',
    breed: 'Bass',
    water_type: 'limnetic',
    temper: 'peacefull',
    img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id231.png',
})

console.log(testCat, testDog, testBird, testFish);
////////////////////////////////////////////////////

const animalsList = [
    new catTemplate({
        id: 201,
        species: 'cat',
        price: 2000,
        gender: 'female',
        weight: 1.6,
        birth_date: '06-28-2019',
        color: 'gray',
        breed: 'Scottish Fold',
        is_sterile: false,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id201.jpg',
    }),
    new catTemplate({
        id: 202,
        species: 'cat',
        price: 2200,
        gender: 'female',
        weight: 1.4,
        birth_date: '01-08-2019',
        color: 'white',
        breed: 'Siamese',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id202.jpg',
    }),
    new catTemplate({
        id: 203,
        species: 'cat',
        price: 2300,
        gender: 'female',
        weight: 2.8,
        birth_date: '03-04-2018',
        color: 'red',
        breed: 'Abyssinian',
        is_sterile: true,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id203.jpg',
    }),
    new catTemplate({
        id: 204,
        species: 'cat',
        price: 2560,
        gender: 'male',
        weight: 3.8,
        birth_date: '06-09-2018',
        color: 'orange',
        breed: 'American Bobtail',
        is_sterile: true,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id204.jpg',
    }),
    new catTemplate({
        id: 205,
        species: 'cat',
        price: 2420,
        gender: 'male',
        weight: 1.9,
        birth_date: '03-27-2019',
        color: 'black',
        breed: 'Bombay',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id205.jpg',
    }),
    new catTemplate({
        id: 206,
        species: 'cat',
        price: 2320,
        gender: 'female',
        weight: 2.3,
        birth_date: '02-21-2019',
        color: 'gray',
        breed: 'Chartreux',
        is_sterile: false,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id206.jpg',
    }),
    new catTemplate({
        id: 207,
        species: 'cat',
        price: 2220,
        gender: 'male',
        weight: 2.9,
        birth_date: '07-04-2018',
        color: 'white',
        breed: 'Japanese Bobtail',
        is_sterile: true,
        hair: 'long',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id207.jpg',
    }),
    new catTemplate({
        id: 208,
        species: 'cat',
        price: 2840,
        gender: 'male',
        weight: 4.7,
        birth_date: '07-22-2018',
        color: 'orange',
        breed: 'Maine Coon',
        is_sterile: false,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id208.jpg',
    }),
    new catTemplate({
        id: 209,
        species: 'cat',
        price: 2710,
        gender: 'female',
        weight: 3.3,
        birth_date: '10-29-2018',
        color: 'gray',
        breed: 'Oriental',
        is_sterile: true,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id209.jpg',
    }),
    new catTemplate({
        id: 210,
        species: 'cat',
        price: 2990,
        gender: 'male',
        weight: 1.4,
        birth_date: '10-17-2019',
        color: 'orange',
        breed: 'Persian',
        is_sterile: false,
        hair: 'long',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id210.jpg',
    }),
    new dogTemplate({
        id: 211,
        species: 'dog',
        price: 5000,
        gender: 'male',
        weight: 20,
        birth_date: '05-26-2018',
        color: 'white-gray-black',
        breed: 'Siberian Husky',
        is_sterile: false,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id211.jpg',
    }),
    new dogTemplate({
        id: 212,
        species: 'dog',
        price: 5250,
        gender: 'female',
        weight: 11,
        birth_date: '01-11-2018',
        color: 'black',
        breed: 'Poodle',
        is_sterile: true,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id212.jpg',
    }),
    new dogTemplate({
        id: 213,
        species: 'dog',
        price: 5250,
        gender: 'female',
        weight: 11,
        birth_date: '01-11-2018',
        color: 'black',
        breed: 'Poodle',
        is_sterile: true,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id212.jpg',
    }),
    new dogTemplate({
        id: 213,
        species: 'dog',
        price: 4750,
        gender: 'male',
        weight: 7,
        birth_date: '04-13-2018',
        color: 'white',
        breed: 'Pug',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id213.jpg',
    }),
    new dogTemplate({
        id: 214,
        species: 'dog',
        price: 4650,
        gender: 'female',
        weight: 4,
        birth_date: '06-24-2018',
        color: 'white-black',
        breed: 'Papillon',
        is_sterile: true,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id214.jpg',
    }),
    new dogTemplate({
        id: 215,
        species: 'dog',
        price: 4350,
        gender: 'male',
        weight: 45,
        birth_date: '01-21-2017',
        color: 'black',
        breed: 'Mastiff',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id215.jpg',
    }),
    new dogTemplate({
        id: 216,
        species: 'dog',
        price: 6350,
        gender: 'female',
        weight: 29,
        birth_date: '08-16-2017',
        color: 'white',
        breed: 'Labrador Retriever',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id216.jpg',
    }),
    new dogTemplate({
        id: 217,
        species: 'dog',
        price: 5520,
        gender: 'male',
        weight: 27,
        birth_date: '08-12-2017',
        color: 'white',
        breed: 'Kuvasz',
        is_sterile: false,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id217.jpg',
    }),
    new dogTemplate({
        id: 218,
        species: 'dog',
        price: 5170,
        gender: 'female',
        weight: 11,
        birth_date: '02-25-2017',
        color: 'black',
        breed: 'French Bulldog',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id218.jpg',
    }),
    new dogTemplate({
        id: 219,
        species: 'dog',
        price: 6120,
        gender: 'female',
        weight: 31,
        birth_date: '03-22-2018',
        color: 'black',
        breed: 'German Shepherd',
        is_sterile: true,
        hair: 'medium',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id219.jpg',
    }),
    new dogTemplate({
        id: 220,
        species: 'dog',
        price: 6410,
        gender: 'male',
        weight: 12,
        birth_date: '06-21-2018',
        color: 'black-red-white',
        breed: 'Harrier',
        is_sterile: false,
        hair: 'short',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id220.jpg',
    }),
    new birdTemplate({
        id: 221,
        species: 'bird',
        price: 550,
        gender: 'female',
        weight: 0.5,
        birth_date: '11-15-2018',
        color: 'gray',
        breed: 'African Grey Parrot',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id221.jpg',
    }),
    new birdTemplate({
        id: 222,
        species: 'bird',
        price: 450,
        gender: 'female',
        weight: 0.4,
        birth_date: '1-17-2018',
        color: 'gray',
        breed: 'Diamond Dove',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id222.jpg',
    }),
    new birdTemplate({
        id: 223,
        species: 'bird',
        price: 340,
        gender: 'female',
        weight: 0.6,
        birth_date: '4-21-2018',
        color: 'white',
        breed: 'Cockatoo',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id223.jpg',
    }),
    new birdTemplate({
        id: 224,
        species: 'bird',
        price: 680,
        gender: 'male',
        weight: 0.8,
        birth_date: '7-28-2019',
        color: 'green',
        breed: 'Eclectus',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id224.jpg',
    }),
    new birdTemplate({
        id: 225,
        species: 'bird',
        price: 880,
        gender: 'male',
        weight: 0.9,
        birth_date: '9-24-2017',
        color: 'red',
        breed: 'Red Lory',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id225.jpg',
    }),
    new birdTemplate({
        id: 226,
        species: 'bird',
        price: 410,
        gender: 'male',
        weight: 0.4,
        birth_date: '10-14-2017',
        color: 'black',
        breed: 'Vasa Parrot',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id226.jpg',
    }),
    new birdTemplate({
        id: 227,
        species: 'bird',
        price: 3580,
        gender: 'male',
        weight: 4.4,
        birth_date: '1-18-2018',
        color: 'white-black',
        breed: 'Eagle',
        type: 'predator',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id227.jpg',
    }),
    new birdTemplate({
        id: 228,
        species: 'bird',
        price: 6480,
        gender: 'female',
        weight: 3.7,
        birth_date: '6-14-2018',
        color: 'white-black',
        breed: 'Owl',
        type: 'predator',
        activity: 'night',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id228.jpg',
    }),
    new birdTemplate({
        id: 229,
        species: 'bird',
        price: 485,
        gender: 'male',
        weight: 1.7,
        birth_date: '4-12-2018',
        color: 'blue',
        breed: 'Hyacinth Macaw',
        type: 'singing',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id229.jpg',
    }),
    new birdTemplate({
        id: 230,
        species: 'bird',
        price: 6455,
        gender: 'female',
        weight: 4.7,
        birth_date: '5-22-2017',
        color: 'gray',
        breed: 'Falcon',
        type: 'predator',
        activity: 'day',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id230.jpg',
    }),
    new fishTemplate({
        id: 231,
        species: 'fish',
        price: 50,
        gender: 'male',
        weight: 0.9,
        birth_date: '08-17-2019',
        color: 'white',
        breed: 'Bass',
        water_type: 'limnetic',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id231.jpg',
    }),
    new fishTemplate({
        id: 232,
        species: 'fish',
        price: 70,
        gender: 'female',
        weight: 1.5,
        birth_date: '01-12-2019',
        color: 'white',
        breed: 'Bonito',
        water_type: 'limnetic',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id232.jpg',
    }),
    new fishTemplate({
        id: 233,
        species: 'fish',
        price: 40,
        gender: 'male',
        weight: 1.2,
        birth_date: '04-16-2019',
        color: 'orange',
        breed: 'Brown Trout',
        water_type: 'limnetic',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id233.jpg',
    }),
    new fishTemplate({
        id: 234,
        species: 'fish',
        price: 75,
        gender: 'male',
        weight: 5.2,
        birth_date: '03-12-2019',
        color: 'orange',
        breed: 'Coral Trout',
        water_type: 'brackish',
        temper: 'predator',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id234.jpg',
    }),
    new fishTemplate({
        id: 235,
        species: 'fish',
        price: 80,
        gender: 'male',
        weight: 3.1,
        birth_date: '09-26-2019',
        color: 'gray',
        breed: 'Flounder',
        water_type: 'brackish',
        temper: 'predator',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id235.jpg',
    }),
    new fishTemplate({
        id: 236,
        species: 'fish',
        price: 65,
        gender: 'female',
        weight: 1.1,
        birth_date: '02-21-2019',
        color: 'red',
        breed: 'Long-Tail Red Snapper',
        water_type: 'brackish',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id236.jpg',
    }),
    new fishTemplate({
        id: 237,
        species: 'fish',
        price: 195,
        gender: 'female',
        weight: 2.1,
        birth_date: '01-11-2018',
        color: 'gray',
        breed: 'Murray Cod',
        water_type: 'brackish',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id237.jpg',
    }),
    new fishTemplate({
        id: 238,
        species: 'fish',
        price: 45,
        gender: 'female',
        weight: 2.3,
        birth_date: '05-24-2018',
        color: 'red-white',
        breed: 'Pink Maomao',
        water_type: 'brackish',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id238.jpg',
    }),
    new fishTemplate({
        id: 239,
        species: 'fish',
        price: 215,
        gender: 'female',
        weight: 1.4,
        birth_date: '06-14-2018',
        color: 'black-orange',
        breed: 'Oscar',
        water_type: 'limnetic',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id239.jpg',
    }),
    new fishTemplate({
        id: 240,
        species: 'fish',
        price: 70,
        gender: 'female',
        weight: 1.1,
        birth_date: '05-11-2017',
        color: 'black',
        breed: 'Mollie',
        water_type: 'limnetic',
        temper: 'peacefull',
        img: 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id240.jpg',
    }),
]

console.log(JSON.stringify(animalsList)); // 
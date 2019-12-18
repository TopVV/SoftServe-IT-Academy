import {animalTemplate} from './animalTemplate.js';

export class birdTemplate extends animalTemplate {
    constructor({id, species, price, gender, weight, birth_date, color, breed, img, type, activity}) {
        super({id, species, price, gender, weight, birth_date, color, breed, img});
        this.type = type, 
        this.activity = activity
    }
}
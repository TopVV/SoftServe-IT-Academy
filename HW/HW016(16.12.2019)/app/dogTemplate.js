import {animalTemplate} from './animalTemplate.js';

export class dogTemplate extends animalTemplate {
    constructor({id, species, price, gender, weight, birth_date, color, breed, img, is_sterile, hair}) {
        super({id, species, price, gender, weight, birth_date, color, breed, img});
        this.is_sterile = is_sterile;
        this.hair = hair;
    }
}
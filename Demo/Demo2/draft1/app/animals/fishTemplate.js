import {animalTemplate} from './animalTemplate.js';

export class fishTemplate extends animalTemplate {
    constructor({id, species, price, gender, weight, birth_date, color, breed, img, water_type, temper}) {
        super({id, species, price, gender, weight, birth_date, color, breed, img});
        this.water_type = water_type;
        this.temper = temper;
    }
}
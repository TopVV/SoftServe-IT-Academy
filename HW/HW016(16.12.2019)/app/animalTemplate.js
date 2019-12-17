export class animalTemplate {
    constructor({id, species, price, gender, weight, birth_date, color, breed, img}) {
        this.id = id;
        this.species = species;
        this.price = price;
        this.gender = gender;
        this.weight = weight;
        this.birth_date = new Date(birth_date).getTime();
        this.color = color;
        this.breed = breed;
        this.img = img;
    }
}

/* id
species
price
gender
weight
birth_date
color
breed
 */
/* black, white, gray, red, brown, orange, yellow, green, blue */
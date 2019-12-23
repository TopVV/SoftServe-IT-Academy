import {
    TemplaterAnimalCard
} from './../general-list/TemplaterAnimalCard.js';

export class TemplaterDetails {
    constructor() {
        this.cardTempl = new TemplaterAnimalCard();
    }
    getDetailedCardTemplate({
        id,
        species,
        price,
        gender,
        weight,
        birth_date,
        color,
        breed,
        image,
        is_sterile,
        hair
    }) {
        return `<div class="details-window">
        <div class="detailed-card text-center">
            <img class="detailed-img img-fluid" src=${image} alt=${species}>
            <h2>${this.cardTempl.firstLetrsToUp(breed)}</h2>
            <ul class="list-group">
                <ul class="list-group list-group-horizontal justify-content-around">
                    <ul class="list-group details-list__columns">
                        <li class="list-group-item border border-secondary">Gender: ${this.cardTempl.firstLetrsToUp(gender)}</li>
                        <li class="list-group-item border border-secondary">Weight: ${weight} kg</li>
                        <li class="list-group-item border border-secondary">Color: ${this.getColorsFormated(color)}</li>
                        </ul>
                    <ul class="list-group details-list__columns">
                        <li class="list-group-item border border-secondary">Birth date: ${this.getBirthDate(birth_date)}</li>
                        <li class="list-group-item border border-secondary">Hair: ${this.cardTempl.firstLetrsToUp(hair)}</li>
                        <li class="list-group-item border border-secondary">Is Sterile: ${is_sterile ? 'Yes' : 'No'}</li>
                    </ul>
                </ul>
                <li class="list-group-item border details-list__columns border-secondary w-50">Price: ${price} $</li>
            </ul>
            <div class="card-footer d-flex flex-row justify-content-around">
                <button type="button" class="add-to-card-btn btn-lg btn btn-success btn__border_round"
                    data-card_id=${id}>Add to cart <i class="fas fa-cart-plus"></i></button>
                <button type="button" class="close-btn btn btn-lg btn-secondary btn__border_round">Close</button>
            </div>
        </div>
    </div>`
    }
    getBirthDate(ms) {
        return new Date(ms).toLocaleDateString();
    }
    getColorsFormated(str) {
        const arr = str.split('-');
        return arr
            .map(color => {
                return `${color[0].toUpperCase()}${color.slice(1)}`
            })
            .join(', ')
    }
}
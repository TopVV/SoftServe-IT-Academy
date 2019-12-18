export class animalCardTemplater {
    constructor() {

    }
    getCardTemplate(cardObj) {
        return `<div class="card text-center m-3">
        <img class="img-fluid card-img-top" src=${cardObj.image} alt=${cardObj.species}>
        <h4 class="card-title font-weight-bold">${cardObj.breed}</h4>
        <div class="card-body d-flex flex-row justify-content-around">
            <div class="animal-icons">
                <span class="species__icon">
                    <i class="fas fa-cat text-secondary"></i>
                </span>
                <span class="gender__icon">
                    <i class="fas fa-mars text-secondary"></i>
                </span>
            </div>
            <div class="card__text font-weight-bold">
                <div class="animal-price">
                    3 month
                </div>
                <div class="animal-price">
                    ${cardObj.price} $
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-success btn-sm">Add to cart <i class="fas fa-cart-plus"></i></button>
            <button type="button" class="btn btn-info btn-sm">Show details</button>
        </div>
    </div>`
    }
}
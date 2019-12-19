export class animalCardTemplater {
    constructor() {

    }
    getCardTemplate(cardObj) {
        return `<div class="card text-center m-3">
        <img class="img-fluid card-img-top" src=${cardObj.image} alt=${cardObj.species}>
        <h4 class="card-title font-weight-bold">${cardObj.breed}</h4>
        <div class="card-body d-flex flex-row justify-content-around">
            <div class="animal-icons text-secondary ">
                <span class="species__icon">
                    ${this.defineSpeciesIcon(cardObj.species)}
                </span>
                <span class="gender__icon">
                    ${this.defineGenderIcon(cardObj.gender)}
                </span>
            </div>
            <div class="card__text font-weight-bold">
                <div class="animal-price">
                    ${this.msToYearsMonth(cardObj.birth_date)}
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
    msToYearsMonth(ms) {
        const diffDays = Math.round((Date.now() - Number(ms))/1000/60/60/24);
        const ageMonths = Math.round(diffDays/30.417);
        const ageWeeks = Math.round(diffDays/7);
        const ageYears = Math.round(ageMonths/12);
        // const ageMonths = ageMonths%12;
        let ageStr = '';


        if(ageYears > 0) {
            ageStr += ageYears === 1 ? `${ageYears} year ` : `${ageYears} years `;
        } else if(ageMonths > 0) {
            ageStr += ageMonths === 1 ? `${ageMonths} month` : `${ageMonths} months`;
        } else if(ageWeeks > 0) {
            ageStr += ageWeeks === 1 ? `${ageWeeks} week` : `${ageWeeks} weeks`;
        } else {
            ageStr += diffDays <= 1 ? `1 day` : `${diffDays} days`;
        }
        if(ageYears > 0 && ageMonths%12 > 0) {
            ageStr += ageMonths%12 === 1 ? `${ageMonths%12} month` : `${ageMonths%12} months`;
        }
        return ageStr;
    }
    defineSpeciesIcon(species) {
        const cat = `<i class="fas fa-cat"></i>`;
        const dog = `<i class="fas fa-dog"></i>`;
        const bird = `<i class="fas fa-dove"></i>`;
        const fish = `<i class="fas fa-fish"></i>`;
        let result;
        if(species.toLowerCase() === 'cat') {
            result = cat;
        } else if(species.toLowerCase() === 'dog') {
            result = dog;
        } else if(species.toLowerCase() === 'bird') {
            result = bird;
        } else if (species.toLowerCase() === 'fish') {
            result = fish;
        }
        return result;
    }
    defineGenderIcon(gender) {
        const male = '<i class="fas fa-mars"></i>';
        const female = '<i class="fas fa-venus"></i>';
        let result;
        if(gender.toLowerCase() === 'male') {
            result = male;
        } else if(gender.toLowerCase() === 'female'){
            result = female;
        }
        return result;
    }
}
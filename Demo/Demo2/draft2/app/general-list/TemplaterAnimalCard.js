export class TemplaterAnimalCard {
    constructor() {

    }
    getCardTemplate({id, species, price, gender, birth_date, breed, image,}) {
        return `<div class="card text-center m-3 border_round animated bounceInDown">
        <img class="img-fluid card-img-top border_round" src=${image} alt=${species}>
        <h4 class="font-weight-bold">${this.firstLetrsToUp(breed)}</h4>
        <div class="card-body d-flex flex-row justify-content-around">
            <div class="animal-icons text-secondary ">
                <span class="species__icon">
                    ${this.defineSpeciesIcon(species)}
                </span>
                <span class="gender__icon">
                    ${this.defineGenderIcon(gender)}
                </span>
            </div>
            <div class="card__text font-weight-bold">
                <div class="animal-price">
                    ${this.msToYearsMonth(birth_date)}
                </div>
                <div class="animal-price">
                    ${price} $
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" class="add-to-card-btn btn btn-success btn__border_round">Add to cart <i class="fas fa-cart-plus"></i></button>
            <button type="button" class="details-btn btn btn-info btn__border_round" data-card_id=${id}>Show details</button>
        </div>
    </div>`
    }
    getNavTemplate(navArr) {
        let numbersStr = '';
        for (let i = 0; i < navArr.length; i++) {
            numbersStr += `<li class="page-item"><a href="#" class="page-link" data-page_n=${navArr[i]}>${navArr[i]}</a></li>`;
        }
        return `<ul class="pagination justify-content-center">
        <li class="page-item"><a href="#" class="page-link" data-page_n='1'><<</a></li>
        ${numbersStr}
        <li class="page-item"><a href="#" class="page-link" data-page_n='-1'>>></a></li>
    </ul>`
    }
    msToYearsMonth(ms) {
        const diffDays = Math.round((Date.now() - Number(ms)) / 1000 / 60 / 60 / 24);
        const ageMonths = Math.round(diffDays / 30.417);
        const ageWeeks = Math.round(diffDays / 7);
        const ageYears = Math.round(ageMonths / 12);
        let ageStr = '';


        if (ageYears > 0) {
            ageStr += ageYears === 1 ? `${ageYears} year ` : `${ageYears} years `;
        } else if (ageMonths > 0) {
            ageStr += ageMonths === 1 ? `${ageMonths} month` : `${ageMonths} months`;
        } else if (ageWeeks > 0) {
            ageStr += ageWeeks === 1 ? `${ageWeeks} week` : `${ageWeeks} weeks`;
        } else {
            ageStr += diffDays <= 1 ? `1 day` : `${diffDays} days`;
        }
        if (ageYears > 0 && ageMonths % 12 > 0) {
            ageStr += ageMonths % 12 === 1 ? `${ageMonths%12} month` : `${ageMonths%12} months`;
        }
        return ageStr;
    }
    defineSpeciesIcon(species) {
        const cat = `<i class="fas fa-cat"></i>`;
        const dog = `<i class="fas fa-dog"></i>`;
        const bird = `<i class="fas fa-dove"></i>`;
        const fish = `<i class="fas fa-fish"></i>`;
        let result;
        if (species.toLowerCase() === 'cat') {
            result = cat;
        } else if (species.toLowerCase() === 'dog') {
            result = dog;
        } else if (species.toLowerCase() === 'bird') {
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
        if (gender.toLowerCase() === 'male') {
            result = male;
        } else if (gender.toLowerCase() === 'female') {
            result = female;
        }
        return result;
    }
    firstLetrsToUp(breed) {
        const wordsArr = breed.match(/\b\w+\b/g);
        return wordsArr.map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
    }
    getDisablFirstLast(n) {
        if (n === 1) {
            return 'disabled'
        }
    }
}

/* `<ul class="pagination justify-content-center">
        <li class="page-item ${navObj.isFirst ? 'disabled' : 'listenable'} "><button class="page--link">First</button></li>
        <li class="page-item ${navObj.isFirst ? 'active' : 'listenable'} "><button class="page--link">${navObj.a}</button></li>
        <li class="page-item ${navObj.isSecond ? 'active' : 'listenable'} "><button class="page--link">${navObj.b}</button></li>
        <li class="page-item ${navObj.isMiddle ? 'active' : 'listenable'} "><button class="page--link">${navObj.c}</button></li>
        <li class="page-item ${navObj.isPenultimate ? 'active' : 'listenable'} "><button class="page--link">${navObj.d}</button></li>
        <li class="page-item ${navObj.isLast ? 'active' : 'listenable'} "><button class="page--link">${navObj.e}</button></li>
        <li class="page-item ${navObj.isLast ? 'disabled' : 'listenable'} "><button class="page--link">Last</button></li>
    </ul>` */

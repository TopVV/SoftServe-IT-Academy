export class TemplateMainWindow {
    constructor() {

    }
    getCardTemplate({id, species, price, gender, birth_date, breed, image,}) {
        return `<div class="card text-center m-3 border_round animated pulse faster" data-card_id=${id}>
        <img class="img-fluid card-img-top border_round" src=${image} alt='Animal pic'>
        <h4 class="font-weight-bold capitalized-sentence">${breed}</h4>
        <div class="card-body d-flex flex-row justify-content-around p-2">
            <div class="animal-icons text-secondary">
                <span class="species__icon">
                    ${species}
                </span>
                <span class="gender__icon">
                    ${gender}
                </span>
            </div>
            <div class="card__text font-weight-bold">
                <div class="animal-price">
                    ${birth_date}
                </div>
                <div class="animal-price">
                    ${price} $
                </div>
            </div>
        </div>
        <div class="card-footer d-flex flex-row justify-content-between p-3">
            <button type="button" class="add-to-cart-btn btn btn-success btn__border_round btn-sm">Add to cart <i
                    class="fas fa-cart-plus"></i></button>
            <button type="button" class="details-btn btn btn-info btn__border_round btn-sm">Show details</button>
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
}

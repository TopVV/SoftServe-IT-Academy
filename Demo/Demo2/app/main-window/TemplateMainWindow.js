export class TemplateMainWindow {
  constructor() {}
  getCardTemplate({
    id,
    species,
    price,
    gender,
    birth_date,
    breed,
    image,
    inCartStr
  }) {
    return `<div class="card text-center m-3 border_round animated pulse faster" data-card_id=${id}>
        <img class="img-fluid card-img-top border_round" src=${image} alt='Animal pic'>
        <h4 class="font-weight-bold text-capitalize">${breed}</h4>
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
        <div class="card-footer d-flex flex-row justify-content-around p-3">
            ${
              inCartStr
                ? this.getRemoveFromCartBtnTemplate()
                : this.getAddToCartBtnTemplate()
            }
            <button type="button" class="details-btn btn btn-info btn__border_round text-uppercase">Details</button>
        </div>
    </div>`;
  }
  getAddToCartBtnTemplate() {
    return `<button type="button" class="add-to-cart-btn to-cart btn btn-success btn__border_round text-uppercase">Add <i
    class="fas fa-cart-plus"></i></button>`;
  }
  getRemoveFromCartBtnTemplate() {
    return `<button type="button" class="remove-from-cart-btn to-cart btn btn-warning btn__border_round text-uppercase">Remove <i
    class="fas fa-minus-circle"></i></button>`;
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
        </ul>`;
  }
  getQuickSpeciesTemplate() {
    return `<button
      type="button"
      class="species-btn species-btn-cat m-sm-3 m-1"
      data-quick_species="all"
    >
      <img src="./img/button-all.png" alt="all-species-symbol" class="img-fluid" />
    </button>
    
    <button
      type="button"
      class="species-btn species-btn-cat m-sm-3 m-1"
      data-quick_species="cat"
    >
      <img src="./img/button-cat.png" alt="cat-symbol" />
    </button>
    
    <button
      type="button"
      class="species-btn species-btn-dog m-sm-3 m-1"
      data-quick_species="dog"
    >
      <img src="./img/button-dog.png" alt="dog-symbol" />
    </button>
    
    <button
      type="button"
      class="species-btn species-btn-fish m-sm-3 m-1"
      data-quick_species="fish"
    >
      <img src="./img/button-fish.png" alt="fish-symbol" />
    </button>
    
    <button
      type="button"
      class="species-btn species-btn-bird m-sm-3 m-1"
      data-quick_species="bird"
    >
      <img src="./img/button-bird.png" alt="bird-symbol" />
    </button>`;
  }
  getUpBtnTemplate() {
    return `<button><i class="far fa-hand-point-up"></i></button>
    <div class="arrow-up__text text-center">To the top</div>`;
  }
}

/* getAddToCartBtnTemplate(){
    return `<button type="button" class="add-to-cart-btn btn btn-success btn__border_round btn-sm">Add to cart <i
    class="fas fa-cart-plus"></i></button>`
}
getRemoveFromCartBtn(){
    return `<button type="button" class="remove-from-cart-btn btn btn-warning btn__border_round btn-sm">Remove from cart <i
    class="fas fa-minus-circle"></i></button>`
} */

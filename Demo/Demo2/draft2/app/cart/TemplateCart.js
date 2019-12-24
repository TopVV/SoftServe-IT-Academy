export class TemplateCart {
  constructor() {}
  getCartBtnTemplate(animalsInCartN) {
    return `<button type="button" class="btn btn-success">${
      animalsInCartN > 0 ? animalsInCartN : ""
    }<i class="fas fa-shopping-cart"></i></button>`;
  }
  getCartWindow(animalsDataRows) {
    return `<div class="cart-window">
     <div class="card text-center cart-area">
         <div class="card-header bg-success">
             Cart
         </div>
         <ul class="list-group list-group">
             ${animalsDataRows}
         </ul>
         <div class="card-footer d-flex flex-row justify-content-around">
             <button type="button"
                 class="cart-submit btn-lg btn btn-success btn__border_round animated pulse infinite slower delay-5s">Submit
                 Payment <i class="fas fa-wallet"></i></button>
             <button type="button" class="clear-btn btn btn-lg btn-primary btn__border_round">Clear List</button>
             <button type="button" class="close-btn btn btn-lg btn-secondary btn__border_round">Close</button>
         </div>
     </div>
 </div>`;
  }
  getAnimalRowTemplate({ species, price, breed }) {
    return `<li class="list-group-item capitalized-sentence">${species} ${breed} ${price}</li>`;
  }
}

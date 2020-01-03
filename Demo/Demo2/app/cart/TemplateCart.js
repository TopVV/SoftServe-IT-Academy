export class TemplateCart {
  constructor() {}
  getCartBtnTemplate(animalsInCartN = '', additionalClass = '') {
    return `<button type="button" class="cart-button">
    <i class="fas fa-shopping-cart">
    <span class='number-in-cart ${additionalClass}'>${animalsInCartN}</span>
    </i>
    </button>`;
  }
  getCartWindow() {
    return `<div class="cart-window">`;
  }
  getCart(animalsDataRows) {
    return `<div class="cart-list card text-center cart-area">
         <div class="card-header bg-success font-weight-bold">
             Cart
         </div>
         <ul class="animals-in-cart-list list-group list-group font-italic">
             ${animalsDataRows}
         </ul>
         <div class="card-footer d-flex flex-row justify-content-around">
             <button type="button"
                 class="to-order-form btn-lg btn btn-success btn__border_round animated pulse infinite slower delay-5s">Submit
                <i class="fas fa-wallet"></i></button>
             <button type="button" class="clear-btn btn btn-lg btn-primary btn__border_round">Clear List</button>
             <button type="button" class="close-btn btn btn-lg btn-secondary btn__border_round">Close</button>
         </div>
     </div>`;
  }
  getAnimalRowTemplate({ species, price, breed, image, id }) {
    return `<li class="animal-in-cart list-group-item text-capitalize" data-card_id=${id}>
    <img
      src="${image}"
      class="animal-in-cart-img img-fluid "
      alt="animal's photo"
    /> ${species} ${breed} ${price}
    <i class="remove-from-cart fas fa-times-circle text-danger"></i>
  </li>`;
  }
  getEmptyCartTemplate() {
    return `<li class='list-group-item text-capitalize'>No animals were added yet :(</li>`;
  }
  getOrderTemplate() {
    return `<form class="order-form col-10 mx-auto cart-area">
    <div class="form-row">
      <div class="col">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="John"
        />
      </div>
      <div class="col">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Doe" />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="+380501234567"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Dnipro, Main St, 1"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="john.doe@example.com"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <label for="notes">Notes</label>
        <input
          type="textarea"
          class="form-control"
          id="notes"
          placeholder="Notes"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-primary submit-order-btn">
      Submit order
    </button>
    <button type="button" class="btn btn-secondary back-to-cart">
      Back to Cart
    </button>
  </form>`;
  }
  getOrderCompleteTemplate() {
    return `<div class="card text-center">
    <div class="card-header">
      Order Status Information
    </div>
    <div class="card-body">
      <h5 class="card-title">
        Your order has been successfully processed
      </h5>
      <p class="card-text">
        Congratulations! We received your order information and our manager will
        contact you soon!
      </p>
      <button class="btn btn-primary" type="submit">Close</button>
    </div>
    <div class="card-footer text-muted"></div>
  </div>`;
  }
}

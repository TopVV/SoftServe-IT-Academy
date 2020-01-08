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
    return `
    <div class="cart-list card cart-area rounded">
    <div class="card-header bg-success">
      <h4 class="font-weight-bold text-center">Cart</h4>
    </div>
    <div class="cart-table table-responsive">
    <table class="table table-striped m-0 text-capitalize">
      <thead class="cart-table__header">
        <tr>
          <th scope="col" class="animal-in-cart__text text-center">#</th>
          <th scope="col" class="animal-in-cart__text text-center">Image</th>
          <th scope="col" class="animal-in-cart__text text-center">Species</th>
          <th scope="col" class="animal-in-cart__text text-center">Breed</th>
          <th scope="col" class="animal-in-cart__text text-center">Price</th>
          <th scope="col" class="animal-in-cart__text text-center">Remove</th>
        </tr>
      </thead>
    <tbody>
      ${animalsDataRows}
    </tbody>
    </table>
    </div>
    <div class="card-footer d-flex flex-row justify-content-around">
      <button type="button"
        class="to-order-form btn-lg btn btn-success btn__border_round animated pulse infinite slower delay-5s">Submit
        <i class="fas fa-wallet"></i></button>
      <button type="button" class="clear-btn btn btn-lg btn-info btn__border_round">Clear List</button>
      <button type="button" class="close-btn btn btn-lg btn-secondary btn__border_round">Close</button>
    </div>`;
  }
  getAnimalRowTemplate({ species, price, breed, image, id }, n) {
    return `
    <tr class="animal-in-cart font-italic" data-card_id=${id}>
      <th class="animal-in-cart__text align-middle text-center" scope="row">${n}</th>
      <td class="text-center"><img
        src="${image}"
        class="animal-in-cart-img img-fluid "
        alt="pic"
      /></td>
      <td class="animal-in-cart__text align-middle text-center">${species}</td>
      <td class="animal-in-cart__text align-middle text-center">${breed}</td>
      <td class="animal-in-cart__text align-middle text-center">${price} $</td>
      <td class="animal-in-cart__text align-middle text-center text-center"><i class="remove-from-cart fas fa-times-circle text-danger"></i></td>
    </tr>`;
  }
  getEmptyCartTemplate() {
    return `<tr><td class='text-capitalize font-weight-bold font-italic text-center py-3' colspan="6"><h4>No animals were added yet :( </h4></td></tr>`;
  }
  getOrderTemplate() {
    return `<form class="order-form col-10 mx-auto cart-area rounded p-4">
    <div class="form-row">
      <div class="col">
        <label for="firstName">First Name*</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="John"
        />
      </div>
      <div class="col">
        <label for="lastName">Last Name*</label>
        <input type="text" class="form-control" id="lastName" placeholder="Doe" />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <label for="phone">Phone Number*</label>
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
        <label for="address">Address*</label>
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
        <label for="email">Email*</label>
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
    <div class="btn-group my-3 d-flex flex-row justify-content-around">
    <button type="submit" class="btn btn-primary submit-order-btn mx-3 rounded-pill">
      Submit order
    </button>
    <button type="button" class="btn btn-secondary back-to-cart mx-3 rounded-pill">
      Back to Cart
    </button>
    </div>
  </form>`;
  }
  getOrderCompleteTemplate() {
    return `<div class="order-complete card text-center col-8 mx-auto rounded p-0">
    <div class="card-header bg-success">
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
  getCartSumTemplate(totalN, totalSum) {
    return `<tr class="animal-in-cart text-center table-success font-weight-bold font-italic">
    <td class="animal-in-cart__text align-middle" colspan="3">total amount: ${totalN}</td>
    <td class="animal-in-cart__text align-middle" colspan="3">total sum: ${totalSum} $</td>
  </tr>`;
  }
}

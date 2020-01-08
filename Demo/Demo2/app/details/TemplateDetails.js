export class TemplateDetails {
  constructor() {}
  getDetailedCardTemplate(
    obj

    /* {
    id,
    species,
    price,
    gender,
    weight,
    birth_date,
    color,
    breed,
    image,
    additionalInfo1,
    additionalInfo2,
    /*     is_sterile,
    hair,
    water_type,
    temper,
    type,
    activity, 
    inCart
  } */
  ) {
    return `<div class="details-window">
    <div class="detailed-card text-center animated zoomIn">
      <img
        class="detailed-img img-fluid"
        src="${obj.image}"
        alt="${obj.species}"
      />
      <h2 class="font-weight-bold text-capitalize">${obj.breed}</h2>
      <ul class="list-group">
        <ul class="list-group list-group-horizontal-md justify-content-around">
          <ul class="list-group details-list__columns">
            <li
              class="list-group-item font-italic details-card-info border border-secondary text-capitalize"
            >
              Gender: ${obj.gender}
            </li>
            <li
              class="list-group-item font-italic details-card-info border border-secondary"
            >
              Weight: ${obj.weight} kg
            </li>
            <li
              class="list-group-item font-italic details-card-info border border-secondary text-capitalize"
            >
              Color: ${obj.color}
            </li>
          </ul>
          <ul class="list-group details-list__columns">
            <li
              class="list-group-item font-italic details-card-info border border-secondary"
            >
              Birth date: ${obj.birth_date}
            </li>
            <li
              class="list-group-item font-italic details-card-info border border-secondary text-capitalize"
            >
              ${obj.additionalInfo1StrName}:
              ${obj[obj.additionalInfo1ValueName]}
            </li>
            <li
              class="list-group-item font-italic details-card-info border border-secondary text-capitalize"
            >
              ${obj.additionalInfo2StrName}:
              ${obj[obj.additionalInfo2ValueName]}
            </li>
          </ul>
        </ul>
        <li
          class="list-group-item font-italic details-card-info border details-list__columns border-secondary w-50"
        >
          Price: ${obj.price} $
        </li>
      </ul>
      <div
        class="card-footer card-details-footer d-md-flex flex-row justify-content-around"
      >
        ${
          obj.inCart
            ? this.getRemoveFromCartBtnTemplate(obj.id)
            : this.getAddToCartBtnTemplate(obj.id)
        }
        <button
          type="button"
          class="close-btn btn btn-lg btn-secondary btn__border_round my-1"
        >
          Close
        </button>
      </div>
    </div>
  </div>`;
  }
  getAddToCartBtnTemplate(id) {
    return `<button type="button" class="add-to-cart-btn to-cart btn-lg btn btn-success btn__border_round animated pulse infinite slower delay-5s my-1 text-uppercase"
    data-card_id=${id}>Add <i class="fas fa-cart-plus"></i></button>`;
  }
  getRemoveFromCartBtnTemplate(id) {
    return `<button type="button" class="remove-from-cart-btn to-cart btn-lg btn btn-warning btn__border_round my-1"
    data-card_id=${id}>Remove <i class="fas fa-minus-circle"></i></button>`;
  }
}

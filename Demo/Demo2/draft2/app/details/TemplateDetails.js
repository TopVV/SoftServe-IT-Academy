export class TemplateDetails {
  constructor() {}
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
        <div class="detailed-card text-center animated zoomIn">
            <img class="detailed-img img-fluid" src=${image} alt=${species}>
            <h2 class='capitalized-sentence'>${breed}</h2>
            <ul class="list-group">
                <ul class="list-group list-group-horizontal justify-content-around">
                    <ul class="list-group details-list__columns">
                        <li class="list-group-item border border-secondary capitalized-sentence">Gender: ${gender}</li>
                        <li class="list-group-item border border-secondary">Weight: ${weight} kg</li>
                        <li class="list-group-item border border-secondary capitalized-sentence">Color: ${color}</li>
                        </ul>
                    <ul class="list-group details-list__columns">
                        <li class="list-group-item border border-secondary">Birth date: ${birth_date}</li>
                        <li class="list-group-item border border-secondary capitalized-sentence">Hair: ${hair}</li>
                        <li class="list-group-item border border-secondary">Is Sterile: 
                        ${is_sterile ? "Yes" : "No"}</li>
                    </ul>
                </ul>
                <li class="list-group-item border details-list__columns border-secondary w-50">Price: ${price} $</li>
            </ul>
            <div class="card-footer d-flex flex-row justify-content-around">
                <button type="button" class="add-to-cart-btn btn-lg btn btn-success btn__border_round animated pulse infinite slower delay-5s"
                    data-card_id=${id}>Add to cart <i class="fas fa-cart-plus"></i></button>
                <button type="button" class="close-btn btn btn-lg btn-secondary btn__border_round">Close</button>
            </div>
        </div>
    </div>`;
  }
}

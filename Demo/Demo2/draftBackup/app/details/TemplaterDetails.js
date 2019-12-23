export class TemplaterDetails {
    constructor() {
    }
    getDetailedCardTemplate({id, species, price, gender, weight, birth_date, color, breed, image, is_sterile, hair}) {
        return `<div class="details-window">
        <div class="detailed-card text-center">
            
        <img class="detailed-img" src="https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/img/animals_pics/id201.jpg" alt="pic">
        <h2>"Siberian Husky"</h2>
        <ul class="list-group">
            <li class="list-group-item">"species": "dog"</li>
            <li class="list-group-item">"price": 5000</li>
            <li class="list-group-item">"gender": "male"</li>
            <li class="list-group-item">"weight": 20</li>
            <li class="list-group-item">"birth_date": 1527282000000,</li>
            <li class="list-group-item">"color": "white-gray-black"</li>
            <li class="list-group-item">"is_sterile": false</li>
            <li class="list-group-item">"hair": "medium"</li>
          </ul>

        </div>
    </div>`
    }
}
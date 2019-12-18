export class modelGeneralList {
    constructor(){
        this.enLink = 'https://maksv21.github.io/softserve/demo2/database/animals_en.json';
        this.ruLink = 'https://maksv21.github.io/softserve/demo2/database/animals_ru.json';
    }
    getAnimalsListArr() {
        return fetch(this.enLink)
        .then(resp => resp.json())
    }
}
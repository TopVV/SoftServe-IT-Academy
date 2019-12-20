export class modelGeneralList {
    constructor() {
        this.enLink = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_en.json';
        this.ruLink = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_ru.json';
        this.animalBaseSrc = [];
        this.pageSize = 20;
    }
    getAnimalsListArr() {
        return fetch(this.enLink)
            .then(resp => resp.json())
            .then(animalsArr => {
                this.animalBaseSrc = [...animalsArr]
                console.log(animalsArr, '1');
                return animalsArr
            })
    }
}

// https://maksv21.github.io/softserve/demo2/database/animals_en.json
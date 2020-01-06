export class ModelAnimalsData {
  constructor({ subscribe, unsubscribe, notify }) {
    this.enLink =
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_en.json';
    this.ruLink =
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_ru.json';
    this.notify = notify;
    this.animalBaseData = [];
  }
  getAnimalBaseDataDownloaded() {
    fetch(this.enLink)
      .then(resp => resp.json())
      .then(respBody => {
        this.animalBaseData = [...respBody];
        this.notify('animals-data-updated', this.animalBaseData);
        localStorage.setItem(
          'savedAnimalsBase',
          JSON.stringify(this.getCurrentAnimalBase())
        );
      });
  }
  getSpeciesData(species) {
    let speciesDataArr = [];
    if (species === 'all') {
      speciesDataArr = [...this.animalBaseData];
    } else {
      speciesDataArr = this.animalBaseData.filter(
        obj => obj.species === species
      );
    }
    return speciesDataArr;
  }
  getCurrentAnimalBase() {
    return this.animalBaseData;
  }
  setCurrentAnimalBase(arr) {
    this.animalBaseData = [...arr];
    this.notify('animals-data-updated', this.animalBaseData);
  }
}

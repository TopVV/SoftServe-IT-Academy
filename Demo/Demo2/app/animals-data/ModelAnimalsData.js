export class ModelAnimalsData {
  constructor({ subscribe, unsubscribe, notify }) {
    this.enLink =
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_en.json';
    this.ruLink =
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_ru.json';
    this.notify = notify;
    this.animalBaseData = [];
    this.getAnimalBaseData();
  }
  getAnimalBaseData() {
    fetch(this.enLink)
      .then(resp => resp.json())
      .then(respBody => {
        this.animalBaseData = [...respBody];
        this.totalPagesNumber = Math.ceil(
          this.animalBaseData.length / this.pageSize
        );
        this.currentPageData = this.animalBaseData.slice(0, this.pageSize);
        this.notify('animals-data-updated', this.animalBaseData);
      });
  }
  getSearchedData(input) {
    let foundDataArr = [];
    foundDataArr = this.animalBaseData.filter(
      obj => obj.breed.toLowerCase().indexOf(input) > -1
    );
    return foundDataArr;
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
}

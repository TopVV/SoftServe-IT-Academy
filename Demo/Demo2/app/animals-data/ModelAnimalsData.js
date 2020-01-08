export class ModelAnimalsData {
  constructor({ notify }) {
    this.enLink =
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_en.json';
    this.ruLink =
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_ru.json';
    this.notify = notify;
    this.animalBaseData = [];
    this.initialDataSent = false;
  }
  getAnimalBaseDataDownloaded() {
    fetch(this.enLink)
      .then(resp => resp.json())
      .then(respBody => {
        const isTheSameDataBase = false;
        if (this.animalBaseData.length === respBody.length) {
          respBody.every((animalObj, i) => {
            return animalObj.id === this.animalBaseData[i].id;
          });
        }
        if (!isTheSameDataBase) {
          this.setCurrentAnimalBase(respBody);
          localStorage.setItem(
            'savedAnimalsBase',
            JSON.stringify(this.getCurrentAnimalBase())
          );
        }
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
    if (this.initialDataSent) {
      this.notify('animals-data-updated', this.animalBaseData);
    } else {
      this.notify('first-page-data', this.animalBaseData);
      this.initialDataSent = true;
    }
  }
  getIfAnimalObjCorrect(obj) {
    let checkResult;
    let baseObj;
    if (obj.hasOwnProperty('id')) {
      const keysArr = Object.keys(obj);
      this.animalBaseData.some(animalObj => {
        if (animalObj.id === obj.id) {
          baseObj = animalObj;
          return true;
        }
        return false;
      });
      checkResult = keysArr.every(key => obj[key] === baseObj[key]);
    } else {
      checkResult = false;
    }
    return checkResult;
  }
}

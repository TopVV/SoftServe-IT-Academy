import { ModelAnimalsData } from './ModelAnimalsData.js';

export class ControllerAnimalsData {
  constructor({ subscribe, notify }) {
    this.model = new ModelAnimalsData({ notify });
    this.subscribe = subscribe;
    this.notify = notify;
    this.subscribe(
      'species-select-new',
      this.getRequestedSpeciesData.bind(this)
    );
    this.getBaseForFirstPage();
  }
  getRequestedSpeciesData(species) {
    this.notify('species-select-result', this.getSpicesDataArr(species));
  }
  getSpicesDataArr(species) {
    return this.model.getSpeciesData(species);
  }
  getBaseForFirstPage() {
    this.getLocalStorageInfo();
    this.getBaseDownloaded();
    this.getLocalStorageCart();
  }
  getLocalStorageInfo() {
    if (localStorage.getItem('savedAnimalsBase')) {
      try {
        const localAnimalBase = JSON.parse(
          localStorage.getItem('savedAnimalsBase')
        );
        this.model.setCurrentAnimalBase(localAnimalBase);
      } catch (e) {
        console.log('something wrong with localStorage', e);
      }
    }
  }
  getBaseDownloaded() {
    this.model.getAnimalBaseDataDownloaded();
  }
  getLocalStorageCart() {
    if (localStorage.getItem('savedCart')) {
      try {
        const localCartArr = JSON.parse(localStorage.getItem('savedCart'));
        const isCorrectCart = localCartArr.every(animalObj =>
          this.model.getIfAnimalObjCorrect(animalObj)
        );
        if (isCorrectCart) {
          localCartArr.forEach(animalObj => {
            this.notify('add-to-cart', { ...animalObj });
          });
        } else {
          throw new Error('incorrect animals info in cart');
        }
      } catch (e) {
        console.log('something wrong with localStorage', e);
      }
    }
  }
}

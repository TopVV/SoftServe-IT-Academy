import { ModelAnimalsData } from './ModelAnimalsData.js';

export class ControllerAnimalsData {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelAnimalsData({ subscribe, unsubscribe, notify });
    this.subscribe = subscribe;
    this.notify = notify;
    this.subscribe(
      'species-select-new',
      this.getRequestedSpeciesData.bind(this)
    );
    this.getLocalStorageInfo();
  }
  getRequestedSpeciesData(species) {
    this.notify('species-select-result', this.getSpicesDataArr(species));
  }
  getSpicesDataArr(species) {
    return this.model.getSpeciesData(species);
  }
  getLocalStorageInfo() {
    if (localStorage.getItem('savedAnimalsBase')) {
      const localAnimalBase = JSON.parse(localStorage.getItem('savedAnimalsBase'));
      this.model.setCurrentAnimalBase(localAnimalBase);
    } else {
      this.model.getAnimalBaseDataDownloaded();
    }
  }
}

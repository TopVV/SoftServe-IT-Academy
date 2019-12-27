import { Publisher } from './../share/Publisher.js';
import { ModelAnimalsData } from './ModelAnimalsData.js';

export class ControllerAnimalsData {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelAnimalsData({ subscribe, unsubscribe, notify });
    this.subscribe = subscribe;
    this.notify = notify;
    this.subscribe('new-search-request', this.getSearchedData.bind(this));
    this.subscribe('species-select-new', this.getRequestedSpeciesData.bind(this));
  }
  getSearchedData(input) {
    this.notify('new-search-result', this.model.getSearchedData(input));
  }
  getRequestedSpeciesData(species) {
    this.notify('species-select-result', this.getSpiciesDataArr(species));
  }
  getSpiciesDataArr(species) {
    return this.model.getSpeciesData(species);
  }
}

import {Publisher} from './../share/Publisher.js';
import {ModelAnimalsData} from './ModelAnimalsData.js';

export class ControllerAnimalsData {
    constructor({subscribe, unsubscribe, notify}) {
        this.model = new ModelAnimalsData({subscribe, unsubscribe, notify});
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('new-search', this.getSearchedData.bind(this));
    }
    getSearchedData(input){
        this.notify('new-search-result', this.model.getSearchedData(input));
    }
}

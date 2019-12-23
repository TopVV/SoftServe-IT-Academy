import {ModelPetsData} from './ModelPetsData.js';
import {Publisher} from './../share/Publisher.js';

export class ControllerPetsData {
    constructor({subscribe, unsubscribe, notify}) {
        this.model = new ModelPetsData({subscribe, unsubscribe, notify})
    }
}
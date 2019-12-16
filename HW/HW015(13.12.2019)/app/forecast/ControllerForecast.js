import {
    ModelForecast
} from './ModelForecast.js';
import {
    ViewForecast
} from './ViewForecast.js';

export class ControllerForecast {
    constructor() {
        this.model = new ModelForecast;
        this.view = new ViewForecast;
        this.view.addListnerBtnSearch(this.handleBtnSearch.bind(this));
        this.view.addListnerInputEnter(this.handleEnterOnInput.bind(this));
        this.view.addListnerBtnReset(this.handleBtnReset.bind(this));
    }
    handleBtnSearch() {
        this.getForecastInfo(this.view.getUserInput());
    }
    handleEnterOnInput(event) {
        if (event.keyCode === 13) {
            this.view.btnSearch.click();
        }
    }
    handleBtnReset(){
        this.view.resetPage();
        this.view.resetUserInput();
    }
    getForecastInfo(cityName) {
        this.model.getForecastBody(cityName)
            .then(obj => this.view.renderForecast(obj));
    }
}
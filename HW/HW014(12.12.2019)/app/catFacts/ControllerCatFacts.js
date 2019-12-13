import {
    ModelCatFacts
} from "./ModelCatFacts.js";
import {
    ViewCatFacts
} from "./ViewCatFacts.js";

export class ControllerCatFacts {
    constructor() {
        this.model = new ModelCatFacts();
        this.view = new ViewCatFacts();
        this.view.addListners(this.handleSearchBtn.bind(this), this.handleEnterOnInput.bind(this));
    };
    handleSearchBtn() {
        this.getFactsPics(this.view.checkInput());
        this.view.resetInput();
    }
    handleEnterOnInput(event) {
        if (event.keyCode === 13) {
            this.view.btnSearch.click();
        }
    }
    getFactsPics(factsNumb) {
        this.model.getData(factsNumb)
            .then(values => Promise.all(values.map(value => value.json())))
            .then(finalVals => {
                this.view.renderFacts(finalVals[0].data, finalVals[1])
            })
    }
}
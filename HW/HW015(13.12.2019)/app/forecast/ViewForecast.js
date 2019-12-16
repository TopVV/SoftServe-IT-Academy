import {
    Templater
} from './../../../share/Templater.js';

export class ViewForecast {
    constructor() {
        this.docBody = document.querySelector('.body');
        this.forecastResponseDiv = document.querySelector('.forecast-response');
        this.btnSearch = document.querySelector('.btn-search');
        this.btnReset = document.querySelector('.btn-reset');
        this.inputSearch = document.querySelector('.forecast-Input');
        this.templater = new Templater('./app/forecast/forecastTeamplate.tvv');
        this.soretedObjValues = [];
    }
    renderForecast(forecastObj) {
        let str = '';
        str += this.prepareForecastInfo(forecastObj);
        this.forecastResponseDiv.innerHTML += str;
        this.resetUserInput();
        this.soretedObjValues.length = 0;
    }
    getSortedObj(someObj, additionalName = '') {
        let newArr;
        if (Array.isArray(someObj)) {
            newArr = Object.entries(someObj[0])
        } else if (typeof (someObj) === "object") {
            newArr = Object.entries(someObj)
        }

        for (let i = 0; i < newArr.length; i++) {

            if (typeof (newArr[i][1]) === 'object') {
                this.getSortedObj(newArr[i][1], newArr[i][0]);
            } else if (newArr[i][0] === 'temp') {
                this.soretedObjValues.push({
                    name: `${additionalName}-${newArr[i][0]}`,
                    value: Math.round(parseFloat(Number(newArr[i][1]) - 273, 15) * 10) / 10
                })
            } else if (newArr[i][0] === 'sunrise') {
                this.soretedObjValues.push({
                    name: `${additionalName}-${newArr[i][0]}`,
                    value: new Date(Number(newArr[i][1]) * 1000).toLocaleTimeString().slice(0, 5)
                })
            } else if (newArr[i][0] === 'sunset') {
                this.soretedObjValues.push({
                    name: `${additionalName}-${newArr[i][0]}`,
                    value: new Date(Number(newArr[i][1]) * 1000).toLocaleTimeString().slice(0, 5)
                })
            } else {
                this.soretedObjValues.push({
                    name: `${additionalName}-${newArr[i][0]}`,
                    value: newArr[i][1]
                })
            }
        }
        return this.soretedObjValues
    }
    prepareForecastInfo(cityForecastObj) {        
        return this.templater.getHTML(this.getSortedObj(cityForecastObj))
    }
    addListnerBtnSearch(searchFunc) {
        this.btnSearch.addEventListener('click', searchFunc);
    }
    addListnerInputEnter(enterHandler) {
        this.inputSearch.addEventListener('keyup', enterHandler);
    }
    addListnerBtnReset(resetFunc){
        this.btnReset.addEventListener('click', resetFunc)
    }
    getUserInput() {
        if (this.inputSearch.value) {
            return this.inputSearch.value
        }
    }
    resetUserInput() {
        this.inputSearch.value = '';
    }
    resetPage() {
        this.forecastResponseDiv.innerHTML = '';
    }
}
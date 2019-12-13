export class ModelCatFacts {
    constructor() {
        this.catFactsLink = "https://catfact.ninja/facts?limit=";
        this.catPicsLink = "https://api.thecatapi.com/v1/images/search?limit="
    }
    getData(factsAmount = 1) {
        let factsAPICall = fetch(this.catFactsLink + factsAmount);
        let picsAPICall = fetch(this.catPicsLink + factsAmount);
        return Promise.all([factsAPICall, picsAPICall])
    }
}
export class ModelForecast {
    constructor() {
        this.apiLink = `https://api.openweathermap.org/data/2.5/weather?q=`;
        this.apiKey = '&APPID=dca1c42ae5b37d061e74cebdae00e69b';
    }
    getForecastBody(city = 'Dnipro') {
        return fetch(`${this.apiLink}${city}${this.apiKey}`)
            .then(resp => resp.json())
    }
}
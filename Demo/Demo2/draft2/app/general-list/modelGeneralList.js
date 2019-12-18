export class modelGeneralList {
    constructor(){
        this.link = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals-en-general.json'
    }
    getAnimalsListArr() {
        return fetch(this.link)
        .then(resp => resp.json())
    }
}
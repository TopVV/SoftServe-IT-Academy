export class Templater {
    constructor(url) {
        this.url = url;
        this.str = '';
        this.getTeamplate()
    }
    getTeamplate() {
        fetch(this.url).then(prom => prom.text())
            .then(txtResp => this.str = txtResp)
        // .then(() => console.log(this.str))
    }
    getHTML(data) {
        let str = this.str;
        data.forEach(obj => {
            str = str.replace(new RegExp(`{{${obj.name}}}`, 'g'), obj.value);
        });
        return str
    }
}
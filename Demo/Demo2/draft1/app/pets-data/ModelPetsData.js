export class ModelPetsData {
    constructor({subscribe, unsubscribe, notify}) {
        this.enLink = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_en.json';
        this.ruLink = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_ru.json';
        this.pageSize = 20;
        this.animalBaseData = [];
        this.currentPageData = [];
        this.currentPageNumber = 1;
        this.totalPagesNumber;
        this.getAnimalBaseData();
        this.notify = notify;
    }

    getAnimalBaseData() {
        fetch(this.enLink)
            .then(resp => resp.json())
            .then(respBody => {
                this.animalBaseData = [...respBody];
                this.totalPagesNumber = Math.ceil(this.animalBaseData.length / this.pageSize);
                this.currentPageData = this.animalBaseData.slice(0, this.pageSize);
                this.notify('pets-data-first-rdy', this.getCustomPage(pageNumber));
            })
    }

    getCustomPage(pageNumber = 1) {
        if (pageNumber === -1) {
            pageNumber = this.totalPagesNumber;
        }
        this.currentPageData = this.animalBaseData.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
        this.currentPageNumber = pageNumber;
        return this.currentPageData;
    }
    getNavArr() {
        const navArr = [];
        let startPageN = this.currentPageNumber - 2 > 1 ? this.currentPageNumber - 2 : 1;
        let endPageN = (this.currentPageNumber + 2) <= this.totalPagesNumber ? (this.currentPageNumber + 2) : this.totalPagesNumber;
        for (let i = startPageN; i <= endPageN; i++) {
            navArr.push(i);
        }
        return navArr;
    }
    getNavStat() {
        return {
            current: this.currentPageNumber,
            last: this.totalPagesNumber,
        }
    }
    setPageSize(newPageSize) {
        this.pageSize = newPageSize;
    }
}
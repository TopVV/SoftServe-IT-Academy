export class modelGeneralList {
    constructor() {
        this.enLink = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_en.json';
        this.ruLink = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo2/general-files/animals_ru.json';
        this.animalBaseData = [];
        this.pageSize = 20;
        this.currentPageData = [];
        this.currentPageNumber = 1;
        this.totalPagesNumber;
    }


    getFirstPageData() {
        return fetch(this.enLink)
            .then(resp => {
                return resp.json()
            })
            .then(respBody => {
                this.animalBaseData = [...respBody];
                this.totalPagesNumber = Math.ceil(this.animalBaseData.length / this.pageSize);
                this.currentPageData = this.animalBaseData.slice(0, this.pageSize);
                return this.currentPageData
            })
    }
    getCustomPage(pageNumber) {
        // debugger
        if (pageNumber === 'First') {
            pageNumber = 1;
        } else if (pageNumber === 'Last') {
            pageNumber = this.totalPagesNumber;
        } else {
            pageNumber = Number(pageNumber);
        }
        this.currentPageData = this.animalBaseData.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
        this.currentPageNumber = pageNumber;
        return this.currentPageData;
    }
    getNavObj() {
        const navObj = {
            isFirst: this.currentPageNumber === 1,
            isSecond: this.currentPageNumber === 2,
            isPenultimate: this.currentPageNumber === this.totalPagesNumber - 1,
            isLast: this.currentPageNumber === this.totalPagesNumber,
            isMiddle: this.currentPageNumber > 2 && this.currentPageNumber < this.totalPagesNumber - 1,
        };
        if (navObj.isFirst) {
            navObj.a = this.currentPageNumber;
            navObj.b = this.currentPageNumber + 1;
            navObj.c = this.currentPageNumber + 2;
            navObj.d = this.currentPageNumber + 3;
            navObj.e = this.currentPageNumber + 4;

        } else if (navObj.isSecond) {
            navObj.a = this.currentPageNumber - 1;
            navObj.b = this.currentPageNumber;
            navObj.c = this.currentPageNumber + 1;
            navObj.d = this.currentPageNumber + 2;
            navObj.e = this.currentPageNumber + 3;
        } else if (navObj.isPenultimate) {
            navObj.a = this.currentPageNumber - 3;
            navObj.b = this.currentPageNumber - 2;
            navObj.c = this.currentPageNumber - 1;
            navObj.d = this.currentPageNumber;
            navObj.e = this.currentPageNumber + 1;
        } else if (navObj.isLast) {
            navObj.a = this.currentPageNumber - 4;
            navObj.b = this.currentPageNumber - 3;
            navObj.c = this.currentPageNumber - 2;
            navObj.d = this.currentPageNumber - 1;
            navObj.e = this.currentPageNumber;
        } else {
            navObj.a = this.currentPageNumber - 2;
            navObj.b = this.currentPageNumber - 1;
            navObj.c = this.currentPageNumber;
            navObj.d = this.currentPageNumber + 1;
            navObj.e = this.currentPageNumber + 2;
        }
        return navObj
    }
}

// https://maksv21.github.io/softserve/demo2/database/animals_en.json
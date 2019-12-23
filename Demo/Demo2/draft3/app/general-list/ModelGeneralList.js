export class ModelGeneralList {
    constructor() {
        this.animalBaseData = [];
        this.pageSize = 20;
        this.currentPageData = [];
        this.currentPageNumber = 1;
        this.totalPagesNumber;
    }
    setNewAnimalBase(newBaseArr) {
        this.animalBaseData = [...newBaseArr];
        this.totalPagesNumber = Math.ceil(this.animalBaseData.length / this.pageSize);
    }
    getCustomData(pageNumber = 1) {
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
    getAnimalById(id){
        for (let i = 0; i < this.currentPageData.length; i++) {
            if(this.currentPageData[i].id === id) {
                return this.currentPageData[i]
            }
        }
    }
}
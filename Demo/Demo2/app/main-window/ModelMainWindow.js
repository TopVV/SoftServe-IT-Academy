export class ModelMainWindow {
  constructor() {
    this.animalBaseData = [];
    this.pageSize = 20;
    this.currentPageData = [];
    this.currentPageNumber = 1;
    this.totalPagesNumber;
  }
  setNewAnimalBase(newBaseArr) {
    this.animalBaseData = [...newBaseArr];
    this.totalPagesNumber = Math.ceil(
      this.animalBaseData.length / this.pageSize
    );
  }
  getCustomData(pageNumber = 1) {
    if (pageNumber === -1) {
      pageNumber = this.totalPagesNumber;
    }
    this.currentPageData = this.animalBaseData.slice(
      (pageNumber - 1) * this.pageSize,
      pageNumber * this.pageSize
    );
    this.currentPageNumber = pageNumber;
    return this.currentPageData.map(obj => this.prepareObjForTemplate(obj));
  }
  getNavArr() {
    const navArr = [];
    let startPageN =
      this.currentPageNumber - 2 > 1 ? this.currentPageNumber - 2 : 1;
    let endPageN =
      this.currentPageNumber + 2 <= this.totalPagesNumber
        ? this.currentPageNumber + 2
        : this.totalPagesNumber;
    for (let i = startPageN; i <= endPageN; i++) {
      navArr.push(i);
    }
    return navArr;
  }
  getNavStat() {
    return {
      current: this.currentPageNumber,
      last: this.totalPagesNumber
    };
  }
  getAnimalById(id) {
    for (let i = 0; i < this.animalBaseData.length; i++) {
      if (this.animalBaseData[i].id === id) {
        return this.animalBaseData[i];
      }
    }
  }
  prepareObjForTemplate(obj) {
    const objClone = { ...obj };
    objClone.species = this.defineSpeciesIcon(obj.species);
    objClone.gender = this.defineGenderIcon(obj.gender);
    objClone.birth_date = this.msToYearsMonth(obj.birth_date);
    return objClone;
  }
  msToYearsMonth(ms) {
    const diffDays = Math.round(
      (Date.now() - Number(ms)) / 1000 / 60 / 60 / 24
    );
    const ageMonths = Math.round(diffDays / 30.417);
    const ageWeeks = Math.round(diffDays / 7);
    const ageYears = Math.round(ageMonths / 12);
    let ageStr = "";

    if (ageYears > 0) {
      ageStr += ageYears === 1 ? `${ageYears} year ` : `${ageYears} years `;
    } else if (ageMonths > 0) {
      ageStr += ageMonths === 1 ? `${ageMonths} month` : `${ageMonths} months`;
    } else if (ageWeeks > 0) {
      ageStr += ageWeeks === 1 ? `${ageWeeks} week` : `${ageWeeks} weeks`;
    } else {
      ageStr += diffDays <= 1 ? `1 day` : `${diffDays} days`;
    }
    if (ageYears > 0 && ageMonths % 12 > 0) {
      ageStr +=
        ageMonths % 12 === 1
          ? `${ageMonths % 12} month`
          : `${ageMonths % 12} months`;
    }
    return ageStr;
  }
  defineGenderIcon(gender) {
    const male = '<i class="fas fa-mars"></i>';
    const female = '<i class="fas fa-venus"></i>';
    let result;
    if (gender.toLowerCase() === "male") {
      result = male;
    } else if (gender.toLowerCase() === "female") {
      result = female;
    }
    return result;
  }
  defineSpeciesIcon(species) {
    const cat = `<i class="fas fa-cat"></i>`;
    const dog = `<i class="fas fa-dog"></i>`;
    const bird = `<i class="fas fa-dove"></i>`;
    const fish = `<i class="fas fa-fish"></i>`;
    let result;
    if (species.toLowerCase() === "cat") {
      result = cat;
    } else if (species.toLowerCase() === "dog") {
      result = dog;
    } else if (species.toLowerCase() === "bird") {
      result = bird;
    } else if (species.toLowerCase() === "fish") {
      result = fish;
    }
    return result;
  }
}

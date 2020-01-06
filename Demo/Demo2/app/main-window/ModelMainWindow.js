export class ModelMainWindow {
  constructor() {
    this.speciesSelectedData = [];
    this.searchResultsData = null;
    this.currentData = [];
    this.pageSize = 20;
    this.currentPageData = [];
    this.currentPageNumber = 1;
    this.totalPagesNumber;
    this.scrollYPosition = 0;
    this.activeSpecies = 'all';
    this.inputData = '';
    this.animalsInCart = [];
    this.sortBy = null;
  }
  setNewAnimalBase(newBaseArr) {
    this.speciesSelectedData = [...newBaseArr];
    this.setTotalPageN(this.speciesSelectedData);
    this.currentPageNumber = 1;
    this.scrollYPosition = 0;
  }
  getCustomData(pageNumber = this.currentPageNumber) {
    this.currentData =
      this.searchResultsData !== null
        ? this.searchResultsData
        : this.speciesSelectedData;
    this.setTotalPageN(this.currentData);
    if (pageNumber === -1) {
      pageNumber = this.totalPagesNumber;
    }
    this.currentPageData = this.currentData.slice(
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
    for (let i = 0; i < this.speciesSelectedData.length; i++) {
      if (this.speciesSelectedData[i].id === id) {
        return this.speciesSelectedData[i];
      }
    }
  }
  setScrollYPosition(position) {
    this.scrollYPosition = position;
  }
  getScrollYPosition() {
    return this.scrollYPosition;
  }
  setActiveSpecies(species) {
    this.activeSpecies = species;
  }
  getActiveSpecies() {
    return this.activeSpecies;
  }
  setSearchedData(inputData = this.inputData) {
    if (this.inputData !== inputData) {
      this.inputData = inputData;
    }
    if (this.inputData.length <= 0) {
      this.searchResultsData = null;
    } else {
      this.searchResultsData = this.speciesSelectedData.filter(
        obj => obj.breed.toLowerCase().indexOf(inputData) > -1
      );
    }
  }
  setTotalPageN(dataArr) {
    this.totalPagesNumber = Math.ceil(dataArr.length / this.pageSize);
  }
  setAnimalsInCart(animalsArr) {
    this.animalsInCart = [...animalsArr];
  }
  getAnimalsSorted(sortType) {
    this.sortBy = sortType;
    let sortFunction;
    const sortFuncObject = {
      priceDown(a, b) {
        return b.price - a.price;
      },
      priceUp(a, b) {
        return a.price - b.price;
      },
      ageDown(a, b) {
        return a.birth_date - b.birth_date;
      },
      ageUp(a, b) {
        return b.birth_date - a.birth_date;
      },
      none(a, b) {
        return Math.random() - 0.5;
      }
    };

    if (sortType === 'price-down' || sortType === 'price-up') {
      sortFunction =
        sortType === 'price-down'
          ? sortFuncObject.priceDown
          : sortFuncObject.priceUp;
    } else if (sortType === 'age-down' || sortType === 'age-up') {
      sortFunction =
        sortType === 'age-down' ? sortFuncObject.ageDown : sortFuncObject.ageUp;
    } else {
      sortFunction = sortFuncObject.none;
    }
    this.speciesSelectedData.sort(sortFunction);
    this.currentPageNumber = 1;
  }
  prepareObjForTemplate(obj) {
    const objClone = { ...obj };
    objClone.species = this.defineSpeciesIcon(obj.species);
    objClone.gender = this.defineGenderIcon(obj.gender);
    objClone.birth_date = this.msToYearsMonth(obj.birth_date);
    objClone.inCartStr = this.animalsInCart.some(
      cartAnimal => cartAnimal.id === obj.id
    );
    return objClone;
  }
  msToYearsMonth(ms) {
    const diffDays = Math.round(
      (Date.now() - Number(ms)) / 1000 / 60 / 60 / 24
    );
    const ageMonths = Math.round(diffDays / 30.417);
    const ageWeeks = Math.round(diffDays / 7);
    const ageYears = Math.round(ageMonths / 12);
    let ageStr = '';

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
    if (gender.toLowerCase() === 'male') {
      result = male;
    } else if (gender.toLowerCase() === 'female') {
      result = female;
    }
    return result;
  }
  defineSpeciesIcon(species) {
    const speciesIcons = {
      cat: `<i class="fas fa-cat"></i>`,
      dog: `<i class="fas fa-dog"></i>`,
      bird: `<i class="fas fa-dove"></i>`,
      fish: `<i class="fas fa-fish"></i>`,
    }
    let result;
    if (species.toLowerCase() === 'cat') {
      result = speciesIcons.cat;
    } else if (species.toLowerCase() === 'dog') {
      result = speciesIcons.dog;
    } else if (species.toLowerCase() === 'bird') {
      result = speciesIcons.bird;
    } else if (species.toLowerCase() === 'fish') {
      result = speciesIcons.fish;
    }
    return result;
  }
}

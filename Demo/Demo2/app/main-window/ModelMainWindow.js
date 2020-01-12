export class ModelMainWindow {
  constructor() {
    this.allAnimalsBase = [];
    this.pageSize = 20;
    this.currentPageData = [];
    this.currentPageNumber = 1;
    this.totalPagesNumber;
    this.scrollYPosition = 0;
    this.animalsInCart = [];
    this.speciesFilter = {
      enabled: false,
      name: 'species',
      requestedValue: 'none',
      filterDataArr(arr) {
        return arr.filter(obj => obj.species === this.requestedValue);
      }
    };
    this.searchFilter = {
      enabled: false,
      name: 'search',
      requestedValue: '',
      filterDataArr(arr) {
        return arr.filter(
          obj => obj.breed.toLowerCase().indexOf(this.requestedValue) > -1
        );
      }
    };
    this.sortFilter = {
      enabled: true,
      name: 'sort',
      requestedValue: 'none',
      sortFuncObj: {
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
      },
      filterDataArr(arr) {
        return arr.sort(this.sortFuncObj[this.requestedValue]);
      }
    };
    this.filtersArr = [this.speciesFilter, this.searchFilter, this.sortFilter];
  }
  setNewAnimalBase(newBaseArr) {
    this.allAnimalsBase = [...newBaseArr];
    this.setTotalPageN(this.allAnimalsBase);
  }
  getCustomData(pageNumber = this.currentPageNumber) {
    const currentData = this.getCurrentAnimalsData();
    this.setTotalPageN(currentData);
    if (pageNumber === -1) {
      pageNumber = this.totalPagesNumber;
    }
    this.currentPageData = currentData.slice(
      (pageNumber - 1) * this.pageSize,
      pageNumber * this.pageSize
    );
    this.currentPageNumber = pageNumber;
    return this.currentPageData.map(obj => this.prepareObjForTemplate(obj));
  }
  getCurrentAnimalsData() {
    let currentData = [...this.allAnimalsBase];
    this.filtersArr.forEach(filter => {
      if (filter.enabled) {
        currentData = filter.filterDataArr(currentData);
      }
    });
    return currentData;
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
    for (let i = 0; i < this.allAnimalsBase.length; i++) {
      if (this.allAnimalsBase[i].id === id) {
        return this.allAnimalsBase[i];
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
    if (species === 'all') {
      this.speciesFilter.enabled = false;
    } else {
      this.speciesFilter.enabled = true;
    }
    this.speciesFilter.requestedValue = species;
  }
  getActiveSpecies() {
    return this.speciesFilter.requestedValue;
  }
  setSearchInputValue(input) {
    if (input.length > 0) {
      this.searchFilter.enabled = true;
      this.searchFilter.requestedValue = input;
    } else {
      this.searchFilter.enabled = false;
    }
  }
  setSortType(sortName) {
    this.sortFilter.requestedValue = sortName;
  }
  setTotalPageN(dataArr = this.allAnimalsBase) {
    this.totalPagesNumber = Math.ceil(dataArr.length / this.pageSize);
  }
  setAnimalsInCart(animalsArr) {
    this.animalsInCart = [...animalsArr];
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
    const genderIcons = {
      male: '<i class="fas fa-mars"></i>',
      female: '<i class="fas fa-venus"></i>'
    };
    return genderIcons[gender];
  }
  defineSpeciesIcon(species) {
    const speciesIcons = {
      cat: `<i class="fas fa-cat"></i>`,
      dog: `<i class="fas fa-dog"></i>`,
      bird: `<i class="fas fa-dove"></i>`,
      fish: `<i class="fas fa-fish"></i>`
    };
    return speciesIcons[species];
  }
  setPageSize(n) {
    const currentData = this.getCurrentAnimalsData();
    if (n > currentData.length) {
      this.pageSize = currentData.length;
    } else {
      this.pageSize = n;
    }
    this.setTotalPageN(currentData);
    this.currentPageNumber = 1;
  }
  getPageSize() {
    return Math.round(this.pageSize / 20) * 20;
  }
  getSortType() {
    return this.sortFilter.requestedValue;
  }
  setCurrentPageNumber(n) {
    if (n < 0) {
      this.currentPageNumber = 1;
    } else if (n > this.totalPagesNumber) {
      this.currentPageNumber = this.totalPagesNumber;
    } else {
      this.currentPageNumber = n;
    }
  }
}
export class ModelDetails {
  constructor() {
    this.currentAnimal = null;
    this.animalsInCart = [];
  }
  setCurrentAnimal(animalObj) {
    this.currentAnimal = { ...animalObj };
  }
  getCurrentAnimal() {
    return this.currentAnimal;
  }
  prepareObjForTemplate(obj) {
    const objClone = { ...obj };
    objClone.color = this.getColorsFormated(obj.color);
    objClone.birth_date = this.getBirthDate(obj.birth_date);
    objClone.inCart = this.animalsInCart.some(
      objInCart => objInCart.id === obj.id
    );
    const catObj = {
      name: 'cat',
      additionalInfo1ValueName: 'hair',
      additionalInfo1StrName: 'hair',
      additionalInfo2ValueName: 'is_sterile',
      additionalInfo2StrName: 'is sterile'
    };
    const dogObj = {
      name: 'dog',
      additionalInfo1ValueName: catObj.additionalInfo1ValueName,
      additionalInfo1StrName: catObj.additionalInfo1StrName,
      additionalInfo2ValueName: catObj.additionalInfo2ValueName,
      additionalInfo2StrName: catObj.additionalInfo2StrName
    };
    const fishObj = {
      name: 'fish',
      additionalInfo1ValueName: 'temper',
      additionalInfo1StrName: 'temper',
      additionalInfo2ValueName: 'water_type',
      additionalInfo2StrName: 'water type'
    };
    const birdObj = {
      name: 'bird',
      additionalInfo1ValueName: 'type',
      additionalInfo1StrName: 'type',
      additionalInfo2ValueName: 'activity',
      additionalInfo2StrName: 'activity'
    };
    [catObj, dogObj, fishObj, birdObj].some(speciesObj => {
      if (speciesObj.name === objClone.species) {
        objClone.additionalInfo1ValueName = speciesObj.additionalInfo1ValueName;
        objClone.additionalInfo1StrName = speciesObj.additionalInfo1StrName;
        objClone.additionalInfo2ValueName = speciesObj.additionalInfo2ValueName;
        objClone.additionalInfo2StrName = speciesObj.additionalInfo2StrName;
        return true;
      }
      return false;
    });
    return objClone;
  }
  getBirthDate(ms) {
    return new Date(ms).toLocaleDateString();
  }
  getColorsFormated(str) {
    return str.split('-').join(', ');
  }
  updateAnimalsInCart(animalsArr) {
    this.animalsInCart = [...animalsArr];
  }
}

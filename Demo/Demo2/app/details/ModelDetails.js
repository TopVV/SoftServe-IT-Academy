export class ModelDetails {
  constructor() {
    this.currentAnimal = null;
  }
  setCurrentAnimal(animalObj) {
    this.currentAnimal = { ...animalObj };
  }
  getCurrentAnimal(){
    return this.currentAnimal;
  }
  prepareObjForTemplate(obj) {
    const objClone = { ...obj };
    objClone.color = this.getColorsFormated(obj.color);
    objClone.birth_date = this.getBirthDate(obj.birth_date);
    return objClone;
  }
  getBirthDate(ms) {
    return new Date(ms).toLocaleDateString();
  }
  getColorsFormated(str) {
    return str.split("-").join(", ");
  }
}

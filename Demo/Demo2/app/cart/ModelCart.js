export class ModelCart {
  constructor() {
    this.animalsInCartArr = [];
  }
  addAnimalToCart(animalObj) {
    if (this.animalsInCartArr.every(obj => obj.id !== animalObj.id)) {
      const animalObjClone = { ...animalObj };
      this.animalsInCartArr.push(animalObjClone);
    }
  }
  getAnimalsInCart() {
    return this.animalsInCartArr;
  }
  clearAnimalsInCart() {
    this.animalsInCartArr.length = 0;
  }
  getCartAnimalsQuantity() {
    return this.animalsInCartArr.length;
  }
  deleteAnimalFromCart(animalDelete) {
    this.animalsInCartArr = this.animalsInCartArr.filter(
      animalObj => animalObj.id !== animalDelete.id
    );
  }
}

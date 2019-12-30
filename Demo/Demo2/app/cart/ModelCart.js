export class ModelCart {
  constructor(subscribe, unsubscribe, notify) {
    this.animalsInCartArr = [];
    this.notify = notify;
  }
  addAnimalToCart(animalObj) {
    if (this.animalsInCartArr.every(obj => obj.id !== animalObj.id)) {
      const animalObjClone = { ...animalObj };
      this.animalsInCartArr.push(animalObjClone);
      this.notify('animals-in-cart-update', this.animalsInCartArr);
    }
  }
  getAnimalsInCart() {
    return this.animalsInCartArr;
  }
  clearAnimalsInCart() {
    this.animalsInCartArr.length = 0;
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
  getCartAnimalsQuantity() {
    return this.animalsInCartArr.length;
  }
  deleteAnimalFromCart(animalToDeleteId) {
    this.animalsInCartArr = this.animalsInCartArr.filter(
      animalObj => animalObj.id !== animalToDeleteId
    );
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
}

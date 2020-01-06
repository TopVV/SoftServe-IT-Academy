import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.template = new TemplateCart();
    this.mainWindow = document.querySelector('.main-window');
    this.cartList = document.querySelector('.cart-list');
  }
  renderCartBtn(animalsInCartN) {
    document.querySelector('.cart-button').innerHTML =
      animalsInCartN > 0
        ? this.template.getCartBtnTemplate(animalsInCartN)
        : this.template.getCartBtnTemplate(undefined, 'hidden');
  }
  renderCartWindow() {
    this.mainWindow.classList.add('hidden');
    this.cartList.innerHTML = this.template.getCartWindow();
  }
  renderCart(animalsInCartArr, totalSum) {
    document.querySelector('.cart-window').innerHTML = this.template.getCart(
      this.getAnimalsInCart(animalsInCartArr, totalSum)
    );
  }
  addCartBtnListener(func) {
    document.querySelector('.cart-button').addEventListener('click', func);
  }
  addCartWindowListener(func) {
    document.querySelector('.cart-window').addEventListener('click', func);
  }
  removeCartWindow() {
    document.querySelector('.cart-window').remove();
  }
  getAnimalsInCart(animalsInCart, totalSum) {
    return animalsInCart.length > 0
      ? animalsInCart
          .map((animalObj, i) =>
            this.template.getAnimalRowTemplate(animalObj, i + 1)
          )
          .join('') +
          this.template.getCartSumTemplate(animalsInCart.length, totalSum)
      : this.template.getEmptyCartTemplate();
  }
  renderOrderForm() {
    document.querySelector(
      '.cart-window'
    ).innerHTML = this.template.getOrderTemplate();
  }
  renderOrderComplete() {
    document.querySelector(
      '.cart-window'
    ).innerHTML = this.template.getOrderCompleteTemplate();
  }
  renderErrorInput(inputIdsArr, errInputId) {
    inputIdsArr.some(inputId => {
      const inputClassToAdd =
        inputId === errInputId ? 'is-invalid' : 'is-valid';
      document
        .getElementById(inputId)
        .classList.remove('is-invalid', 'is-valid');
      document.getElementById(inputId).classList.add(`${inputClassToAdd}`);
      return inputClassToAdd === 'is-invalid';
    });
  }
}

import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.template = new TemplateCart();
    this.mainWindow = document.querySelector('.main-window');
    this.cartWindow = document.querySelector('.cart-list');
  }
  renderCartBtn(animalsInCartN) {
    document.querySelector('.cart-button').innerHTML = this.template.getCartBtnTemplate(animalsInCartN);
  }
  renderCartWindow(animalsInCartArr) {
    this.mainWindow.classList.add('hidden');
    this.cartWindow.innerHTML = this.template.getCartWindow(
      this.getAnimalsInCart(animalsInCartArr)
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
  getAnimalsInCart(animalsInCart) {
    return animalsInCart.length > 0
      ? animalsInCart
          .map(animalObj => this.template.getAnimalRowTemplate(animalObj))
          .join('')
      : this.template.getEmptyCartTemplate();
  }
}

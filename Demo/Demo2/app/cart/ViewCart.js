import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.template = new TemplateCart();
    this.mainWindow = document.querySelector('.main-window');
    this.cartnWindow = document.querySelector('.cart-list');
    this.cartBtn = document.querySelector('.cart-button');
  }
  renderCartBtn(animalsInCartN) {
    this.cartBtn.innerHTML = this.template.getCartBtnTemplate(animalsInCartN);
  }
  renderCartWindow(animalsInCartArr) {
    this.mainWindow.classList.add('hidden');
    this.cartnWindow.innerHTML = this.template.getCartWindow(
      this.getAnimalsInCart(animalsInCartArr)
    );
  }
  addCartBtnListner(func) {
    this.cartBtn.addEventListener('click', func);
  }
  addCartWindowListner(func) {
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

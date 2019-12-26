import { ModelCart } from "./ModelCart.js";
import { ViewCart } from "./ViewCart.js";

export class ControllerCart {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelCart();
    this.view = new ViewCart();
    this.subscribe = subscribe;
    this.getCartBtn();
    this.subscribe("add-to-cart", this.getNewCartInfo.bind(this));
  }
  getCartBtn() {
    this.view.renderCartBtn(this.model.getCartAnimalsQuantity());
    this.view.addCartBtnListner(this.handleCartBtnClick.bind(this));
  }
  getNewCartInfo(animalObj) {
    this.model.addAnimalToCart(animalObj);
    this.getCartBtn();
  }
  getCartWindow() {
    this.view.renderCartWindow(this.model.getAnimalsInCart());
    this.view.addCartWindowListner(this.handleCartWindowClick.bind(this));
  }
  handleCartBtnClick() {
    this.getCartWindow();
  }

  handleCartWindowClick(e) {
    if (e.target.closest(".cart-submit")) {
      console.log("Payment submited!");
    } else if (e.target.closest(".clear-btn")) {
      this.view.removeCartWindow();
      this.model.clearAnimalsInCart();
      this.getCartWindow(this.model.getAnimalsInCart());
    } else if (
      e.target.closest(".close-btn") ||
      !e.target.closest(".cart-area")
    ) {
      this.view.removeCartWindow();
      document.querySelector(".main-window").classList.remove("hidden");
    }
  }
}

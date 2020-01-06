import { ModelCart } from './ModelCart.js';
import { ViewCart } from './ViewCart.js';

export class ControllerCart {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelCart(subscribe, unsubscribe, notify);
    this.view = new ViewCart();
    this.subscribe = subscribe;
    this.notify = notify;
    this.getLocalStorageCart();
    this.getCartBtn();
    this.subscribe('add-to-cart', this.getNewCartInfo.bind(this));
    this.subscribe('remove-from-cart', this.deleteItemFromCart.bind(this));
  }
  getLocalStorageCart() {
    if (localStorage.getItem('savedCart')) {
      this.model.setAnimalsInCart(
        JSON.parse(localStorage.getItem('savedCart'))
      );
    }
  }
  getCartBtn() {
    this.getCartBtnUpdated();
    this.view.addCartBtnListener(this.handleCartBtnClick.bind(this));
  }
  getCartBtnUpdated() {
    this.view.renderCartBtn(this.model.getCartAnimalsQuantity());
  }
  getNewCartInfo(animalObj) {
    this.model.addAnimalToCart(animalObj);
    this.getCartBtn();
  }
  getCartWindow() {
    this.view.renderCartWindow();
    this.getCart();
    this.view.addCartWindowListener(this.handleCartWindowClick.bind(this));
  }
  getCart() {
    this.view.renderCart(
      this.model.getAnimalsInCart(),
      this.model.getTotalCartSum()
    );
  }
  handleCartBtnClick() {
    this.getCartWindow();
  }
  deleteItemFromCart(animalId) {
    this.model.deleteAnimalFromCart(animalId);
    this.getCartBtnUpdated();
  }
  clearAnimalsInCart() {
    this.model.clearAnimalsInCart();
    this.getCartBtnUpdated();
  }
  handleCartWindowClick(e) {
    const savedThis = this;
    const toOrderForm = {
      conditionCheck(event) {
        return event.target.closest('.to-order-form');
      },
      action(savedThis) {
        if (savedThis.model.getCartAnimalsQuantity()) {
          savedThis.view.renderOrderForm();
        }
      }
    };
    const removeSingleAnimal = {
      conditionCheck(event) {
        return event.target.closest('.remove-from-cart');
      },
      action(savedThis, event) {
        savedThis.deleteItemFromCart(
          Number(event.target.closest('.animal-in-cart').dataset.card_id)
        );
        savedThis.getCart();
      }
    };
    const clearAllHandler = {
      conditionCheck(event) {
        return event.target.closest('.clear-btn');
      },
      action(savedThis) {
        savedThis.clearAnimalsInCart();
        savedThis.getCart();
      }
    };
    const removeCartWindowHandler = {
      conditionCheck(event) {
        return (
          event.target.closest('.close-btn') || !e.target.closest('.cart-area')
        );
      },
      action(savedThis) {
        savedThis.view.removeCartWindow();
        document.querySelector('.main-window').classList.remove('hidden');
        savedThis.notify('back-to-main-page');
      }
    };
    const submitOrderBtnHandler = {
      conditionCheck(event) {
        return event.target.closest('.submit-order-btn');
      },
      action(savedThis, event) {
        event.preventDefault();
        const buyerInformation = {};
        const inputIdsArr = [
          'firstName',
          'lastName',
          'phone',
          'address',
          'email',
          'notes'
        ];
        inputIdsArr.forEach(inputId => {
          buyerInformation[inputId] = document.getElementById(inputId).value;
        });
        const validationResponse = savedThis.model.validateInput(
          buyerInformation
        );
        if (validationResponse === 'valid') {
          savedThis.view.renderOrderComplete();
          savedThis.model.sendMessage(savedThis.model.getMessageForBot());
          savedThis.clearAnimalsInCart();
        } else {
          savedThis.view.renderErrorInput(inputIdsArr, validationResponse);
        }
      }
    };
    const backToCartBtnHandler = {
      conditionCheck(event) {
        return event.target.closest('.back-to-cart');
      },
      action() {
        savedThis.getCart();
      }
    };
    const handlersArr = [
      toOrderForm,
      removeSingleAnimal,
      clearAllHandler,
      removeCartWindowHandler,
      submitOrderBtnHandler,
      backToCartBtnHandler
    ];
    handlersArr.some(handler => {
      if (handler.conditionCheck(e)) {
        handler.action(savedThis, e);
        return true;
      }
      return false;
    });
  }
  /*   checkIfInCart(id) {
    return this.model.checkIfInCart(id);
  } */
}

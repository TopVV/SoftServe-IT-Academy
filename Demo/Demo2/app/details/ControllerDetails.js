import { ModelDetails } from './ModelDetails.js';
import { ViewDetails } from './ViewDetails.js';

export class ControllerDetails {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelDetails();
    this.view = new ViewDetails();
    this.subscribe = subscribe;
    this.notify = notify;
    subscribe('show-details', this.showDetails.bind(this));
    this.subscribe(
      'animals-in-cart-update',
      this.updateAnimalsInCart.bind(this)
    );
  }
  showDetails(objInfo) {
    this.model.setCurrentAnimal(objInfo);
    this.view.renderDetailsWindow(this.model.prepareObjForTemplate(objInfo));
    this.view.addDetailsWindowListener(
      this.handleDetailsWindowClick.bind(this)
    );
  }
  handleDetailsWindowClick(e) {
    const savedThis = this;
    const toCartHandler = {
      conditionCheck(event) {
        return event.target.closest('.to-cart');
      },
      action(savedThis, event) {
        const type = this.checkTypeOfAction(event);
        if (type === 'add') {
          savedThis.notify('add-to-cart', savedThis.model.getCurrentAnimal());
          savedThis.view.renderRemoveFromCartBtn(
            savedThis.model.getCurrentAnimal().id
          );
        } else if (type === 'remove') {
          savedThis.notify(
            'remove-from-cart',
            savedThis.model.getCurrentAnimal().id
          );
          savedThis.view.renderAddToCartBtn(
            savedThis.model.getCurrentAnimal().id
          );
        }
      },
      checkTypeOfAction(event) {
        return event.target
          .closest('.to-cart')
          .classList.contains('add-to-cart-btn')
          ? 'add'
          : 'remove';
      }
    };
    const closeBtnHandler = {
      conditionCheck(event) {
        return (
          event.target.closest('.close-btn') ||
          !event.target.closest('.detailed-card')
        );
      },
      action(savedThis, event) {
        document.querySelector('.details-window').remove();
        document.querySelector('.main-window').classList.remove('hidden');
        savedThis.notify('back-to-main-page');
      }
    };
    const handlersArr = [toCartHandler, closeBtnHandler];
    handlersArr.some(handler => {
      if (handler.conditionCheck(e)) {
        handler.action(savedThis, e);
        return true;
      }
      return false;
    });
  }
  updateAnimalsInCart(animalsArr) {
    this.model.updateAnimalsInCart(animalsArr);
  }
}

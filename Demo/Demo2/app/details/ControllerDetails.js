import { ModelDetails } from "./ModelDetails.js";
import { ViewDetails } from "./ViewDetails.js";

export class ControllerDetails {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelDetails();
    this.view = new ViewDetails();
    this.subscribe = subscribe;
    this.notify = notify;
    subscribe("show-details", this.showDetailes.bind(this));
  }
  showDetailes(objInfo) {
    this.model.setCurrentAnimal(objInfo);
    this.view.renderDetailsWindow(this.model.prepareObjForTemplater(objInfo));
    this.view.addDetailsWindowListner(this.handleDetailsWindowClick.bind(this));
  }
  handleDetailsWindowClick(e) {
    if (e.target.closest(".add-to-cart-btn")) {
      this.notify('add-to-cart', this.model.getCurrentAnimal());
    } else if (
      e.target.closest(".close-btn") ||
      !e.target.closest(".detailed-card")
    ) {
      document.querySelector(".details-window").remove();
      document.querySelector(".main-window").classList.remove("hidden");
    }
  }
}
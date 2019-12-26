import { TemplateDetails } from "./TemplateDetails.js";

export class ViewDetails {
  constructor() {
    this.templater = new TemplateDetails();
    this.mainWindow = document.querySelector(".main-window");
    this.detailesSection = document.querySelector(".details-info");
  }
  renderDetailsWindow(objInfo) {
    this.mainWindow.classList.add("hidden");
    this.detailesSection.innerHTML = this.templater.getDetailedCardTemplate(
      objInfo
    );
  }
  addDetailsWindowListner(func) {
    document.querySelector(".details-window").addEventListener("click", func);
  }
}
